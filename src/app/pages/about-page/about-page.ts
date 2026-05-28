import { Component } from '@angular/core';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [WhyChooseUsComponent, TestimonialsComponent],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss'
})
export class AboutPage {
}
