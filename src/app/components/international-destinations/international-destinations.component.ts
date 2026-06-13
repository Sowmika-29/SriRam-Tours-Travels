import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WhatsappService } from '../../services/whatsapp.service';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-international-destinations',
  standalone: true,
  imports: [ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './international-destinations.component.html',
  styleUrl: './international-destinations.component.scss'
})
export class InternationalDestinationsComponent implements OnInit {

  destinations = [
    { name: 'Bali', tagline: 'Hidden jungle escapes and serene sunsets.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80' },
    { name: 'Singapore', tagline: 'The city where future meets culture.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80' },
    { name: 'Switzerland', tagline: 'Panoramic alpine journeys beyond imagination.', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80' },
    { name: 'Maldives', tagline: 'Endless blue horizons and overwater luxury.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80' },
    { name: 'Sri Lanka', tagline: 'Ancient temples, wild jungles, turquoise coasts.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80' },
    { name: 'Lakshadweep', tagline: "India's secret paradise, finally yours.", image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80' },
    { name: 'Andaman', tagline: 'Crystal waters and coral dreams.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80' }
  ];

  constructor(
    private route: ActivatedRoute,
    private whatsapp: WhatsappService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const highlight = params['highlight'];
      if (highlight) {
        setTimeout(() => {
          const el = document.getElementById(highlight);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('highlight-pulse');
          }
        }, 500);
      }
    });
  }

  bookDestination(name: string): void {
    this.whatsapp.destination(name);
  }
}
