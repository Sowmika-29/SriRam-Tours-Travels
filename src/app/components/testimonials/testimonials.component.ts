import { Component } from '@angular/core';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [AnimatedHeadingComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

  testimonials = [
    {
      name: 'Priya Ramalingam',
      city: 'Karur',
      text: 'Best tour experience ever! The Kashmir trip was magical. Everything was perfectly organized.',
      rating: 5,
      rotation: -2
    },
    {
      name: 'Suresh Kumar',
      city: 'Chennai',
      text: 'We booked the Kerala package for our family. The bus was luxurious and the driver was very professional.',
      rating: 5,
      rotation: 1.5
    },
    {
      name: 'Deepa Murugan',
      city: 'Coimbatore',
      text: 'School trip to Ooty was amazing! Kids loved every moment. Thank you Sri Ram Tours!',
      rating: 5,
      rotation: -1
    },
    {
      name: 'Karthikeyan R.',
      city: 'Trichy',
      text: 'Corporate event transportation was flawless. Will definitely use them again for our annual meet.',
      rating: 4,
      rotation: 2
    },
    {
      name: 'Meena Sundaram',
      city: 'Erode',
      text: 'The Bali trip was a dream come true! Ganesan sir personally ensured everything went smoothly.',
      rating: 5,
      rotation: -1.5
    }
  ];

  constructor() {}

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
