import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicesComponent } from '../../components/services/services.component';
import { AnimatedHeadingComponent } from '../../components/animated-heading/animated-heading.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServicesComponent, AnimatedHeadingComponent, ScrollRevealDirective, RouterLink],
  templateUrl: './services-page.html',
  styleUrl: './services-page.scss'
})
export class ServicesPage {
}
