import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { TiltCardDirective } from '../../directives/tilt-card.directive';
import { WhatsappService } from '../../services/whatsapp.service';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [ScrollRevealDirective, TiltCardDirective, AnimatedHeadingComponent],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss'
})
export class FleetComponent {

  flagshipVehicle = {
    type: 'Luxury Non AC Coach',
    capacity: '45 seats',
    features: ['Recliner seats', 'USB charging', 'Music system', 'WiFi'],
    bestFor: 'Long tours, Corporate trips, Weddings',
    image: '/images/bus.jpeg'
  };

  constructor(
    private whatsapp: WhatsappService
  ) {}

  bookFleet(): void {
    this.whatsapp.fleet(this.flagshipVehicle.type);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80';
  }
}
