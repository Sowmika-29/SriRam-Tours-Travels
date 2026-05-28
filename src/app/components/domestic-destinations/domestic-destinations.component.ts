import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WhatsappService } from '../../services/whatsapp.service';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-domestic-destinations',
  standalone: true,
  imports: [ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './domestic-destinations.component.html',
  styleUrl: './domestic-destinations.component.scss'
})
export class DomesticDestinationsComponent {

  destinations = [
    { name: 'Munnar', tagline: 'Wake up to misty tea estates.', image: 'https://images.unsplash.com/photo-1625553200007-1ea025f1a928?w=800&q=80' },
    { name: 'Kashmir', tagline: 'Snow-covered valleys, untouched silence.', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80' },
    { name: 'Kerala', tagline: "God's own country, your own pace.", image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80' },
    { name: 'Himachal Pradesh', tagline: 'Where the mountains whisper your name.', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80' },
    { name: 'Rajasthan', tagline: 'Golden deserts and royal grandeur.', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80' },
    { name: 'Goa', tagline: 'Sun, sand, and endless freedom.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80' },
    { name: 'Sikkim', tagline: 'Hidden Himalayan treasure, untouched.', image: 'https://images.unsplash.com/photo-1626686010641-01e35fd5bcab?w=800&q=80' },
    { name: 'Andaman', tagline: 'Crystal waters and coral dreams.', image: 'https://images.unsplash.com/photo-1589179899560-e tried-Unsplash?w=800&q=80' },
    { name: 'Ladakh', tagline: 'The roof of the world awaits you.', image: 'https://images.unsplash.com/photo-1614603187928-81a1e3e6a4e9?w=800&q=80' }
  ];

  constructor(
    private whatsapp: WhatsappService
  ) {
    // Fix Andaman image
    this.destinations[7].image = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80';
  }

  bookDestination(name: string): void {
    this.whatsapp.destination(name);
  }
}
