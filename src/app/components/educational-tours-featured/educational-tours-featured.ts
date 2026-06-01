import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-educational-tours-featured',
  standalone: true,
  imports: [ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './educational-tours-featured.html',
  styleUrl: './educational-tours-featured.scss'
})
export class EducationalToursFeaturedComponent {

  constructor(private router: Router) {}

  exploreTours(category?: string) {
    if (category) {
      this.router.navigate(['/educational-tours'], { queryParams: { category } });
    } else {
      this.router.navigate(['/educational-tours']);
    }
  }
}
