import { Component, HostListener, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
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
export class App implements OnInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  private whatsapp = inject(WhatsappService);
  
  // Video scroll scrubbing state
  private targetTime = 0;
  private currentTime = 0;
  private lerpSpeed = 0.08; // Smooth seeking interpolation factor
  private animationFrameId: number | null = null;

  ngOnInit(): void {
    this.updateScrollProperty();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    // 1. Update css custom variable for parallax styles
    this.updateScrollProperty();

    // 2. Drive the scroll video scrubbing target calculation
    this.calculateTargetTime();

    // 3. Start the continuous seek loop if not already running
    if (this.animationFrameId === null) {
      this.updateVideoFrame();
    }
  }

  private updateScrollProperty(): void {
    const scrollY = window.scrollY || window.pageYOffset;
    document.documentElement.style.setProperty('--scroll-y', `${scrollY}`);
  }

  onVideoMetadataLoaded(): void {
    this.calculateTargetTime();
    this.currentTime = this.targetTime;
    const video = this.bgVideo?.nativeElement;
    if (video) {
      video.currentTime = this.currentTime;
    }
  }

  private calculateTargetTime(): void {
    const video = this.bgVideo?.nativeElement;
    if (!video || isNaN(video.duration)) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    if (maxScroll <= 0) return;
    
    const scrollPercent = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    
    // Map scroll percentage to the video duration
    this.targetTime = scrollPercent * video.duration;
  }

  private updateVideoFrame(): void {
    const video = this.bgVideo?.nativeElement;
    if (!video || isNaN(video.duration)) {
      // If metadata is not loaded, check again on next animation frame
      this.animationFrameId = requestAnimationFrame(() => this.updateVideoFrame());
      return;
    }

    const diff = this.targetTime - this.currentTime;
    // Seek smoothly if difference is notable
    if (Math.abs(diff) > 0.002) {
      this.currentTime += diff * this.lerpSpeed;
      
      // Clamp values safely
      if (this.currentTime < 0) this.currentTime = 0;
      if (this.currentTime > video.duration) this.currentTime = video.duration;
      
      video.currentTime = this.currentTime;
      
      this.animationFrameId = requestAnimationFrame(() => this.updateVideoFrame());
    } else {
      // Snapped to target frame, hold frame and stop animation loop to conserve resources
      this.currentTime = this.targetTime;
      video.currentTime = this.currentTime;
      this.animationFrameId = null;
    }
  }

  whatsappChat(): void {
    this.whatsapp.general();
  }
}
