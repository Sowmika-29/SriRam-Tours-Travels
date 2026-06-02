import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { InternationalDestinationsComponent } from '../../components/international-destinations/international-destinations.component';

@Component({
  selector: 'app-international-trips',
  standalone: true,
  imports: [InternationalDestinationsComponent],
  templateUrl: './international-trips.html',
  styleUrl: './international-trips.scss'
})
export class InternationalTrips implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('International Tour Packages from Karur | SRI RAM Tour & Travels');
    this.meta.updateTag({
      name: 'description',
      content: 'Plan your international holidays from Karur, Tamil Nadu with custom flight, hotel, and sightseeing bookings. Trusted tour operator since 2017.'
    });
  }
}

