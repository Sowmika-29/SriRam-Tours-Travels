import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tiltCard]',
  standalone: true
})
export class TiltCardDirective implements OnInit {
  @Input() tiltMax = 10;
  @Input() tiltScale = 1.02;
  @Input() tiltSpeed = 400;

  private el!: HTMLElement;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    this.el = this.elementRef.nativeElement;
    this.el.style.transition = `transform ${this.tiltSpeed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`;
    this.el.style.transformStyle = 'preserve-3d';
    this.el.style.willChange = 'transform';
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -this.tiltMax;
    const rotateY = ((x - centerX) / centerX) * this.tiltMax;

    this.el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${this.tiltScale})`;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  }
}
