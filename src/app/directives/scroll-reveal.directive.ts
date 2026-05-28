import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'left' | 'right' | 'down' = 'up';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;
    el.style.opacity = '0';
    el.style.transform = this.getInitialTransform();
    el.style.transition = `all 0.9s cubic-bezier(0.16,1,0.3,1) ${this.revealDelay}ms`;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translate(0,0)';
        observer.disconnect();
      }
    }, { threshold: 0.15 });

    observer.observe(el);
  }

  private getInitialTransform(): string {
    const map: Record<string, string> = {
      up: 'translateY(60px)',
      down: 'translateY(-60px)',
      left: 'translateX(-60px)',
      right: 'translateX(60px)'
    };
    return map[this.revealDirection];
  }
}
