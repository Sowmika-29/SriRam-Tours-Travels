import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

interface SanitizedServiceItem {
  icon: SafeHtml;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {

  rawServices: ServiceItem[] = [
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>', title: 'Tourism & Travel', desc: 'Curated domestic and international packages' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="6" y1="6" x2="6" y2="12"/><line x1="18" y1="6" x2="18" y2="12"/></svg>', title: 'Bus For Rental', desc: 'AC & Non-AC buses for all occasions' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>', title: 'School / College Trips', desc: 'Safe, fun educational excursions' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>', title: 'Mobile Catering', desc: 'Veg & Non-Veg on-the-go dining' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4.5-3.5 3.5-2.5-.5-1.5 1.5 3.5 1.5 1.5 3.5 1.5-1.5-.5-2.5 3.5-3.5 4.5 6c.4-.2.7-.6.6-1.1z"/></svg>', title: 'Flight Ticket Booking', desc: 'Best deals on domestic & international flights' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="3" width="16" height="18" rx="2" ry="2"/><path d="M4 8h16"/><path d="M4 16h16"/><path d="M8 12h8"/></svg>', title: 'Train Ticket Booking', desc: 'Hassle-free rail reservations' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', title: 'South-East Asia Packages', desc: 'Thailand, Bali, Malaysia & more' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>', title: 'Corporate Events', desc: 'End-to-end corporate travel logistics' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>', title: 'DJ / Sound Parties', desc: 'Premium sound for celebrations' }
  ];

  services: SanitizedServiceItem[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.services = this.rawServices.map(service => ({
      ...service,
      icon: this.sanitizer.bypassSecurityTrustHtml(service.icon)
    }));
  }
}
