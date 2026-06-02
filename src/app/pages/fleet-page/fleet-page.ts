import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { FleetComponent } from '../../components/fleet/fleet.component';

@Component({
  selector: 'app-fleet-page',
  standalone: true,
  imports: [FleetComponent],
  templateUrl: './fleet-page.html',
  styleUrl: './fleet-page.scss'
})
export class FleetPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Luxury Bus & Coach Rental in Karur | SRI RAM Travels');
    this.meta.updateTag({
      name: 'description',
      content: 'Hire luxury tourist buses, coaches, and tempo travellers in Karur. Ideal for marriages, corporate events, and tours. Call +919486547938.'
    });
  }
}

