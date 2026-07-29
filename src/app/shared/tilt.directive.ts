import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

/**
 * Subtle 3D tilt tracking the cursor position over the host element.
 * Disabled for touch devices and users who prefer reduced motion.
 */
@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  private readonly maxTilt = 6; // degrees
  private enabled: boolean;

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
    const rect = this.el.nativeElement.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width; // 0 -> 1
    const py = (event.clientY - rect.top) / rect.height; // 0 -> 1

    const rotateY = (px - 0.5) * this.maxTilt * 2;
    const rotateX = (0.5 - py) * this.maxTilt * 2;

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.enabled) return;
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
    );
  }
}
