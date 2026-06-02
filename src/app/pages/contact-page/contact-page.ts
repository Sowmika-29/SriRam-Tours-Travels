import { Component, OnInit, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Contact SRI RAM Tour & Travels Karur | Booking Info');
    this.meta.updateTag({
      name: 'description',
      content: 'Contact Karur\'s top travel agency. Get quotes for bus hires or customize a package. Call 9486547938 or message us on WhatsApp!'
    });
  }
}

