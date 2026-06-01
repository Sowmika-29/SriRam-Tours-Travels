import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Chatbot } from './components/chatbot/chatbot';
import { ContactComponent } from './components/contact/contact.component';
import { WhatsappService } from './services/whatsapp.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ContactComponent,
    FooterComponent,
    Chatbot
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private whatsapp = inject(WhatsappService);

  whatsappChat(): void {
    this.whatsapp.general();
  }
}
