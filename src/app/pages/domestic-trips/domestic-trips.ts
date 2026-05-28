import { Component } from '@angular/core';
import { DomesticDestinationsComponent } from '../../components/domestic-destinations/domestic-destinations.component';

@Component({
  selector: 'app-domestic-trips',
  standalone: true,
  imports: [DomesticDestinationsComponent],
  templateUrl: './domestic-trips.html',
  styleUrl: './domestic-trips.scss'
})
export class DomesticTrips {
}
