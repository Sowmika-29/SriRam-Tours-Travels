import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DomesticDestinationsComponent } from '../../components/domestic-destinations/domestic-destinations.component';

@Component({
  selector: 'app-domestic-trips',
  standalone: true,
  imports: [DomesticDestinationsComponent],
  templateUrl: './domestic-trips.html',
  styleUrl: './domestic-trips.scss'
})
export class DomesticTrips implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Custom Tour & Travel Packages from Karur | SRI RAM');
    this.meta.updateTag({
      name: 'description',
      content: 'Explore premium domestic tour packages (Kerala, Kashmir, Ooty, pilgrimage temple tours) curated from Karur, Tamil Nadu. Book today!'
    });
  }
}

