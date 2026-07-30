import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  standalone: true
})
export class MagneticDirective {
  private readonly strength = 0.28;
  private readonly maxOffset = 10;
  private enabled: boolean;
  private rect?: DOMRect;
  private rafId?: number;
  private lastEvent?: MouseEvent;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    this.enabled = hasHover && !prefersReduced;
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.enabled) return;
    this.rect = this.el.nativeElement.getBoundingClientRect();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.enabled) return;
    this.lastEvent = event;

    if (this.rafId != null) return;

    this.rafId = requestAnimationFrame(() => {
      this.rafId = undefined;
      if (this.lastEvent) this.applyPull(this.lastEvent);
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (!this.enabled) return;
    if (this.rafId != null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = undefined;
    }
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0)');
  }

  private applyPull(event: MouseEvent): void {
    const rect = this.rect ?? this.el.nativeElement.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);

    const x = this.clamp(relX * this.strength, -this.maxOffset, this.maxOffset);
    const y = this.clamp(relY * this.strength, -this.maxOffset, this.maxOffset);

    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate(${x}px, ${y}px)`);
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
  }
}