import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experiences = [
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
      title: 'Travel Experiences',
      copy: 'Curated journeys that transform your perspective',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="6" y1="6" x2="6" y2="12"/><line x1="18" y1="6" x2="18" y2="12"/></svg>',
      title: 'Transport Services',
      copy: 'Premium fleet for every journey you imagine',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
      title: 'Educational Trips',
      copy: 'Where classrooms meet the open road',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=800&q=80'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
      title: 'Corporate & Events',
      copy: 'Seamless logistics for your business gatherings',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4.5-3.5 3.5-2.5-.5-1.5 1.5 3.5 1.5 1.5 3.5 1.5-1.5-.5-2.5 3.5-3.5 4.5 6c.4-.2.7-.6.6-1.1z"/></svg>',
      title: 'Ticket Booking',
      copy: 'Flights, trains — all under one roof',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db56?w=800&q=80'
    },
    {
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
      title: 'Catering & Group',
      copy: 'Feasts that fuel unforgettable adventures',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80'
    }
  ];

  constructor() {}
}
