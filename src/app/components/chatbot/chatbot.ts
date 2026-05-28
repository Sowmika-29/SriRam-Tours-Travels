import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.scss'
})
export class Chatbot {
  isOpen = signal(false);
  messages = signal<{text: string, isBot: boolean}[]>([
    { text: 'Hello! I am your Sri Ram travel assistant. How can I help you plan your journey today?', isBot: true }
  ]);

  options = [
    'Enquire about Destinations',
    'Transport / Bus Rental',
    'Custom Tour Package',
    'Speak to a Human (WhatsApp)'
  ];

  constructor(private whatsapp: WhatsappService) {}

  toggleChat(): void {
    this.isOpen.update(v => !v);
  }

  handleOptionClick(option: string): void {
    this.messages.update(msgs => [...msgs, { text: option, isBot: false }]);
    
    setTimeout(() => {
      if (option.includes('WhatsApp') || option.includes('Speak to a Human')) {
        this.messages.update(msgs => [...msgs, { text: 'Redirecting you to our WhatsApp support...', isBot: true }]);
        setTimeout(() => this.whatsapp.general(), 1000);
      } else {
        this.messages.update(msgs => [...msgs, { 
          text: `Great! Our travel experts specialize in ${option}. Would you like to connect on WhatsApp to discuss the details and get a customized quote?`, 
          isBot: true 
        }]);
        this.options = ['Yes, connect on WhatsApp', 'No, maybe later'];
      }
    }, 600);
  }
}
