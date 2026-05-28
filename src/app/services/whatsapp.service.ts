import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  private base = 'https://wa.me/919486547938';

  openChat(message: string): void {
    const url = `${this.base}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  destination(name: string): void {
    this.openChat(`Hi Sri Ram Tours! I'm interested in the ${name} package. Please share details.`);
  }

  mood(mood: string): void {
    this.openChat(`Hi! I'm looking for a ${mood} travel experience. Can you help?`);
  }

  fleet(type: string): void {
    this.openChat(`Hi! I need a ${type} bus rental. Please share availability and pricing.`);
  }

  general(): void {
    this.openChat(`Hi Sri Ram Tours! I'd like to know more about your packages.`);
  }

  wizard(dest: string, people: number, budget: number): void {
    this.openChat(`Hi! I want to travel to ${dest} with ${people} people. Budget: ₹${budget}. Please help plan!`);
  }

  enquiry(name: string, phone: string, email: string, destination: string, message: string): void {
    this.openChat(
      `New Enquiry:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nDestination: ${destination}\nMessage: ${message}`
    );
  }
}
