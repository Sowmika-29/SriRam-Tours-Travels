import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { WhatsappService } from '../../services/whatsapp.service';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

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

  constructor(
    private whatsapp: WhatsappService
  ) {}

  selectMood(name: string): void {
    this.whatsapp.mood(name);
  }
}
