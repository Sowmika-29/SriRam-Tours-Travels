import { Component } from '@angular/core';
import { FleetComponent } from '../../components/fleet/fleet.component';

@Component({
  selector: 'app-fleet-page',
  standalone: true,
  imports: [FleetComponent],
  templateUrl: './fleet-page.html',
  styleUrl: './fleet-page.scss'
})
export class FleetPage {
}
