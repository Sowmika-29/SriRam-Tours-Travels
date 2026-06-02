import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('particlesCanvas', { static: false }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private whatsapp: WhatsappService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initParticles();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    // Only update within/near hero section to optimize scroll performance
    if (scrollY <= window.innerHeight) {
      document.documentElement.style.setProperty('--scroll-y', scrollY.toString());
    }
  }

  scrollToDestinations(): void {
    document.querySelector('#domestic')?.scrollIntoView({ behavior: 'smooth' });
  }

  openWhatsApp(): void {
    this.whatsapp.openChat('Hello Sri Ram Tours & Travels, I would like to inquire about booking/packages.');
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
      angle: number;
      angleSpeed: number;
      swayRange: number;
    }

    const particles: Particle[] = [];
    const count = 35; // Minimal count for elegant, non-distracting drift

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: -(Math.random() * 0.2 + 0.05), // Slowly drift upwards
        opacity: Math.random() * 0.25 + 0.05,
        color: Math.random() > 0.5 ? '#c7b793' : '#f8f8e2', // Warm Sand/Gold & Cream matching the new palette
        angle: Math.random() * Math.PI * 2,
        angleSpeed: Math.random() * 0.01 + 0.005,
        swayRange: Math.random() * 0.4 + 0.1
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

        // Organic gentle floating
        p.angle += p.angleSpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.angle) * p.swayRange;

        // Wrap around borders rather than hard bounce for organic flow
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();
  }
}

