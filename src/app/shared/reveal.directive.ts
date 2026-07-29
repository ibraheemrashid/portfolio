import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

/**
 * Adds the `.reveal` class (see styles.scss) and toggles `.is-visible`
 * once the host element scrolls into view. Falls back to immediately
 * visible if the user prefers reduced motion or IntersectionObserver
 * isn't available.
 *
 * Optionally bind a stagger delay in ms, e.g. [appReveal]="i * 80" inside
 * an @for loop, so grouped items (cards, tags, timeline entries) animate
 * in sequence instead of all firing at once.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input('appReveal') delayMs: number | '' = '';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !('IntersectionObserver' in window)) {
      this.renderer.addClass(this.el.nativeElement, 'is-visible');
      return;
    }

    const delay = typeof this.delayMs === 'number' ? this.delayMs : 0;
    if (delay > 0) {
      this.renderer.setStyle(this.el.nativeElement, 'transition-delay', `${delay}ms`);
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
