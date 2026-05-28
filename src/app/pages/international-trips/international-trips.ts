import { Component } from '@angular/core';
import { InternationalDestinationsComponent } from '../../components/international-destinations/international-destinations.component';

@Component({
  selector: 'app-international-trips',
  standalone: true,
  imports: [InternationalDestinationsComponent],
  templateUrl: './international-trips.html',
  styleUrl: './international-trips.scss'
})
export class InternationalTrips {
}
