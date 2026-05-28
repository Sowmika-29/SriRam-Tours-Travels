import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('busHeading', { static: false }) busHeadingRef!: ElementRef;
  @ViewChild('particlesCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  tagline = 'Journeys Beyond Destinations.';
  taglineLetters: string[] = [];
  busAnimationStarted = true;

  constructor(private whatsapp: WhatsappService) {}

  ngOnInit(): void {
    this.taglineLetters = this.tagline.split('');
  }

  ngAfterViewInit(): void {
    this.initParticles();
  }

  scrollToDestinations(): void {
    document.querySelector('#domestic')?.scrollIntoView({ behavior: 'smooth' });
  }

  openWhatsApp(): void {
    this.whatsapp.general();
  }

  scrollDown(): void {
    document.querySelector('#experiences')?.scrollIntoView({ behavior: 'smooth' });
  }

  private initParticles(): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }

    const particles: Particle[] = [];
    const count = 40;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '#2ecc71' : '#f5a623'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();
  }
}
