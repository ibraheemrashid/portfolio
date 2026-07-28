import { Directive, ElementRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';

/**
 * Adds the `.reveal` class (see styles.scss) and toggles `.is-visible`
 * once the host element scrolls into view. Falls back to immediately
 * visible if the user prefers reduced motion or IntersectionObserver
 * isn't available.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      this.renderer.addClass(this.el.nativeElement, 'is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
