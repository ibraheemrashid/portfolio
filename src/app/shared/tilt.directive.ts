import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  private readonly maxTilt = 6;
  private enabled: boolean;
  private rafId?: number;
  private lastEvent?: MouseEvent;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    this.enabled = hasHover && !prefersReduced;

    if (this.enabled) {
      this.renderer.setStyle(this.el.nativeElement, 'transform-style', 'preserve-3d');
      this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.enabled) return;
    this.lastEvent = event;
    if (this.rafId != null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = undefined;
      if (this.lastEvent) this.applyTilt(this.lastEvent);
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.enabled) return;
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = undefined;
    }
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
    );
  }

  private applyTilt(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * this.maxTilt * 2;
    const rotateX = (0.5 - py) * this.maxTilt * 2;

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`
    );
  }
}