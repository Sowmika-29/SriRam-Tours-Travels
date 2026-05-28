import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);

  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Domestic', href: '/domestic-trips' },
    { label: 'International', href: '/international-trips' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  constructor(private whatsapp: WhatsappService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
    document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  whatsappChat(): void {
    this.whatsapp.general();
  }
}
