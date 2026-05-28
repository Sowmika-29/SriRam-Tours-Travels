import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Domestic Tours', href: '/domestic-trips' },
    { label: 'International Tours', href: '/international-trips' },
    { label: 'Our Fleet', href: '/fleet' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact Us', href: '/contact' }
  ];

  servicesList = [
    'Tourism & Travel',
    'Bus For Rental',
    'School Trips',
    'Mobile Catering',
    'Flight Booking',
    'Corporate Events'
  ];

  constructor(
    private whatsapp: WhatsappService
  ) {}

  openWhatsApp(): void {
    this.whatsapp.general();
  }
}
