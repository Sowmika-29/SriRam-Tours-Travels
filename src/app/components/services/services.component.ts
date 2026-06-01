import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

interface ServiceItem {
  image: string;
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
export class ServicesComponent {

  services: ServiceItem[] = [
    { image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', title: 'Tourism & Travel', desc: 'Curated domestic and international packages' },
    { image: 'images/bus.jpeg', title: 'Bus For Rental', desc: 'AC & Non-AC buses for all occasions' },
    { image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80', title: 'School / College Trips', desc: 'Safe, fun educational excursions' },
    { image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80', title: 'Mobile Catering', desc: 'Veg & Non-Veg on-the-go dining' },
    { image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80', title: 'Flight Ticket Booking', desc: 'Best deals on domestic & international flights' },
    { image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&q=80', title: 'Train Ticket Booking', desc: 'Hassle-free rail reservations' },
    { image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80', title: 'South-East Asia Packages', desc: 'Thailand, Bali, Malaysia & more' },
    { image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80', title: 'Corporate Events', desc: 'End-to-end corporate travel logistics' },
    { image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80', title: 'DJ / Sound Parties', desc: 'Premium sound for celebrations' }
  ];
}
