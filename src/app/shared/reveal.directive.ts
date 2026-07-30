import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

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

    let isFirstCheck = true;

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          let shownInstantly = false;
          if (isFirstCheck) {
            this.renderer.setStyle(this.el.nativeElement, 'transition', 'none');
            shownInstantly = true;
          }
          this.renderer.addClass(this.el.nativeElement, 'is-visible');
          this.observer?.unobserve(entry.target);

          const cleanupDelay = shownInstantly ? 0 : delay + 700 + 50;
          setTimeout(() => {
            this.renderer.removeStyle(this.el.nativeElement, 'transition');
            this.renderer.removeStyle(this.el.nativeElement, 'transition-delay');
          }, cleanupDelay);
        }
        isFirstCheck = false;
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
