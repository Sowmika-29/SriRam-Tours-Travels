import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WhatsappService } from '../../services/whatsapp.service';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

interface MoodDestination {
  name: string;
  tagline: string;
  image: string;
  type: 'Domestic' | 'International';
}

@Component({
  selector: 'app-mood-explorer',
  standalone: true,
  imports: [ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './mood-explorer.component.html',
  styleUrl: './mood-explorer.component.scss'
})
export class MoodExplorerComponent {

  moods = [
    {
      name: 'Adventure',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
    },
    {
      name: 'Romantic Escapes',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80'
    },
    {
      name: 'Nature Retreats',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22v-7l-2-2"/><path d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0z"/></svg>',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80'
    },
    {
      name: 'Luxury',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.5 16h19l-2.2 4H4.7z"/><path d="M12 2l-3 10H4l8 4-2.5 8L12 18l2.5 6L12 16l8-4-5-10-3 10z"/></svg>',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80'
    },
    {
      name: 'Beach Bliss',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
      image: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?w=800&q=80'
    },
    {
      name: 'Weekend Escapes',
      icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80'
    }
  ];

  selectedMoodName: string | null = null;
  isMoodModalOpen = false;
  activeDestinations: MoodDestination[] = [];

  moodDestinations: { [key: string]: MoodDestination[] } = {
    'Adventure': [
      { name: 'Kashmir', tagline: 'Snow-covered valleys, untouched silence.', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80', type: 'Domestic' },
      { name: 'Himachal Pradesh', tagline: 'Where the mountains whisper your name.', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', type: 'Domestic' },
      { name: 'Ladakh', tagline: 'The roof of the world awaits you.', image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800&q=80', type: 'Domestic' },
      { name: 'Switzerland', tagline: 'Panoramic alpine journeys beyond imagination.', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80', type: 'International' },
      { name: 'Bali', tagline: 'Hidden jungle escapes and serene sunsets.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', type: 'International' }
    ],
    'Romantic Escapes': [
      { name: 'Munnar', tagline: 'Wake up to misty tea estates.', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', type: 'Domestic' },
      { name: 'Kerala', tagline: "God's own country, your own pace.", image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', type: 'Domestic' },
      { name: 'Maldives', tagline: 'Endless blue horizons and overwater luxury.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', type: 'International' },
      { name: 'Bali', tagline: 'Hidden jungle escapes and serene sunsets.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', type: 'International' }
    ],
    'Nature Retreats': [
      { name: 'Munnar', tagline: 'Wake up to misty tea estates.', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', type: 'Domestic' },
      { name: 'Kerala', tagline: "God's own country, your own pace.", image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', type: 'Domestic' },
      { name: 'Sikkim', tagline: 'Hidden Himalayan treasure, untouched.', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80', type: 'Domestic' },
      { name: 'Switzerland', tagline: 'Panoramic alpine journeys beyond imagination.', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80', type: 'International' },
      { name: 'Sri Lanka', tagline: 'Ancient temples, wild jungles, turquoise coasts.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', type: 'International' }
    ],
    'Luxury': [
      { name: 'Rajasthan', tagline: 'Golden deserts and royal grandeur.', image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80', type: 'Domestic' },
      { name: 'Maldives', tagline: 'Endless blue horizons and overwater luxury.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', type: 'International' },
      { name: 'Dubai', tagline: 'Where dreams are built in gold.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', type: 'International' },
      { name: 'Singapore', tagline: 'The city where future meets culture.', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80', type: 'International' }
    ],
    'Beach Bliss': [
      { name: 'Goa', tagline: 'Sun, sand, and endless freedom.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', type: 'Domestic' },
      { name: 'Andaman', tagline: 'Crystal waters and coral dreams.', image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80', type: 'Domestic' },
      { name: 'Maldives', tagline: 'Endless blue horizons and overwater luxury.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', type: 'International' },
      { name: 'Lakshadweep', tagline: "India's secret paradise, finally yours.", image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80', type: 'International' },
      { name: 'Bali', tagline: 'Hidden jungle escapes and serene sunsets.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', type: 'International' }
    ],
    'Weekend Escapes': [
      { name: 'Munnar', tagline: 'Wake up to misty tea estates.', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', type: 'Domestic' },
      { name: 'Goa', tagline: 'Sun, sand, and endless freedom.', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', type: 'Domestic' },
      { name: 'Malaysia', tagline: 'A melting pot of wonders and flavors.', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80', type: 'International' },
      { name: 'Thailand', tagline: 'Temples, beaches, and vibrant street life.', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=80', type: 'International' }
    ]
  };

  constructor(
    private router: Router,
    private whatsapp: WhatsappService
  ) {}

  selectMood(name: string): void {
    this.selectedMoodName = name;
    this.activeDestinations = this.moodDestinations[name] || [];
    this.isMoodModalOpen = true;
  }

  closeMoodModal(): void {
    this.isMoodModalOpen = false;
    this.selectedMoodName = null;
    this.activeDestinations = [];
  }

  exploreDestination(dest: MoodDestination): void {
    this.closeMoodModal();
    const targetRoute = dest.type === 'Domestic' ? '/domestic-trips' : '/international-trips';
    this.router.navigate([targetRoute], { queryParams: { highlight: dest.name } });
  }
}
