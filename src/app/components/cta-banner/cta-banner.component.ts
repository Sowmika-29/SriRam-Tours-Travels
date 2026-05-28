import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  templateUrl: './cta-banner.component.html',
  styleUrl: './cta-banner.component.scss'
})
export class CtaBannerComponent implements AfterViewInit {
  @ViewChild('headingEl', { static: false }) headingEl!: ElementRef;

  headingRevealed = false;

  headingWords = 'Ready For Your Next Adventure?'.split(' ');

  constructor(
    private whatsapp: WhatsappService,
    private animationService: AnimationService
  ) {}

  ngAfterViewInit(): void {
    if (this.headingEl) {
      this.animationService.observeElement(this.headingEl.nativeElement, () => {
        this.headingRevealed = true;
      });
    }
  }

  whatsappNow(): void {
    this.whatsapp.general();
  }

  scrollToDestinations(): void {
    document.querySelector('#domestic')?.scrollIntoView({ behavior: 'smooth' });
  }
}
