import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WhatsappService } from '../../services/whatsapp.service';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollRevealDirective, AnimatedHeadingComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  form = {
    name: '',
    phone: '',
    email: '',
    destination: '',
    message: ''
  };

  constructor(
    private whatsapp: WhatsappService
  ) {}

  submitForm(): void {
    this.whatsapp.enquiry(
      this.form.name,
      this.form.phone,
      this.form.email,
      this.form.destination,
      this.form.message
    );
  }

  callPhone(number: string): void {
    window.open(`tel:${number}`, '_self');
  }

  sendEmail(): void {
    window.open('mailto:sriramtours27@gmail.com', '_blank');
  }
}
