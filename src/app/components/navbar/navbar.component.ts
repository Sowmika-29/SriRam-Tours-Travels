import { Component, HostListener, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = signal(false);
  isHidden = signal(false);
  isMobileMenuOpen = signal(false);
  private lastScrollY = 0;

  navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Domestic', href: '/domestic-trips' },
    { label: 'International', href: '/international-trips' },
    { label: 'Educational Tours', href: '/educational-tours' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    const currentScrollY = window.scrollY;
    
    // Scrolled status (threshold 60px)
    this.isScrolled.set(currentScrollY > 60);
    
    // Auto-hide on scroll down, show on scroll up
    if (currentScrollY > 120 && currentScrollY > this.lastScrollY && !this.isMobileMenuOpen()) {
      this.isHidden.set(true);
    } else {
      this.isHidden.set(false);
    }
    
    this.lastScrollY = currentScrollY;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
    document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}

