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
    { title: 'Trusted Experts Since 2017', desc: 'Years of delivering exceptional travel experiences across India and beyond.' },
    { title: 'Safe & Verified Fleet', desc: 'Every vehicle is regularly inspected and maintained for maximum safety.' },
    { title: 'Personalized Itineraries', desc: 'Custom-built travel plans that match your dreams and budget.' },
    { title: 'Premium Fleet, Affordable Price', desc: 'Luxury travel doesn\'t have to break the bank.' },
    { title: '50+ Destinations Covered', desc: 'From Kerala backwaters to Swiss Alps, we\'ve been everywhere.' },
    { title: '24/7 Customer Support', desc: 'Round the clock assistance for all your travel needs.' }
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
