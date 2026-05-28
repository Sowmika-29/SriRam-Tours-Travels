import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Chatbot } from './components/chatbot/chatbot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    Chatbot
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
