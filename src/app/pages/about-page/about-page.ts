import { Component } from '@angular/core';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { AnimatedHeadingComponent } from '../../components/animated-heading/animated-heading.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [WhyChooseUsComponent, TestimonialsComponent, AnimatedHeadingComponent, ScrollRevealDirective],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
}
