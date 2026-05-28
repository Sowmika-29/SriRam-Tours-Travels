import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {
}
