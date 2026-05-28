import { Component, AfterViewInit, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimationService } from '../../services/animation.service';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent implements AfterViewInit {
  @ViewChild('statsEl', { static: false }) statsEl!: ElementRef;
  @ViewChildren('counterEl') counterEls!: QueryList<ElementRef>;

  statsRevealed = false;

  reasons = [
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>', title: 'Trusted Experts Since 2017', desc: 'Years of delivering exceptional travel experiences across India and beyond.' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title: 'Safe & Verified Fleet', desc: 'Every vehicle is regularly inspected and maintained for maximum safety.' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>', title: 'Personalized Itineraries', desc: 'Custom-built travel plans that match your dreams and budget.' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/></svg>', title: 'Premium Fleet, Affordable Price', desc: 'Luxury travel doesn\'t have to break the bank.' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', title: '50+ Destinations Covered', desc: 'From Kerala backwaters to Swiss Alps, we\'ve been everywhere.' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>', title: '24/7 Customer Support', desc: 'Round the clock assistance for all your travel needs.' }
  ];

  stats = [
    { value: 5000, suffix: '+', label: 'Happy Travelers' },
    { value: 50, suffix: '+', label: 'Destinations' },
    { value: 8, suffix: '+', label: 'Years of Trust' },
    { value: 100, suffix: '%', label: 'Satisfaction' }
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    if (this.statsEl) {
      this.animationService.observeElement(this.statsEl.nativeElement, () => {
        this.statsRevealed = true;
        // Animate counters
        setTimeout(() => {
          this.counterEls.forEach((el, index) => {
            const stat = this.stats[index];
            this.animationService.animateCounter(
              el.nativeElement,
              stat.value,
              2000,
              stat.suffix
            );
          });
        }, 200);
      });
    }
  }
}
