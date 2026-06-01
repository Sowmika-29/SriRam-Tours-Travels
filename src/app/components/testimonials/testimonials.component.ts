import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedHeadingComponent } from '../animated-heading/animated-heading.component';

interface Testimonial {
  name: string;
  city: string;
  text: string;
  rating: number;
  rotation: number;
  photo: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, AnimatedHeadingComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, OnDestroy, AfterViewInit {

  testimonials: Testimonial[] = [
    {
      name: 'Priya Ramalingam',
      city: 'Karur',
      text: 'Best tour experience ever! The Kashmir trip was magical. Everything was perfectly organized.',
      rating: 5,
      rotation: -1.5,
      photo: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400&q=80'
    },
    {
      name: 'Suresh Kumar',
      city: 'Chennai',
      text: 'We booked the Kerala package for our family. The bus was luxurious and the driver was professional.',
      rating: 5,
      rotation: 1,
      photo: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80'
    },
    {
      name: 'Deepa Murugan',
      city: 'Coimbatore',
      text: 'School trip to Ooty was amazing! Kids loved every moment. Thank you Sri Ram Tours!',
      rating: 5,
      rotation: -1,
      photo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80'
    },
    {
      name: 'Karthikeyan R.',
      city: 'Trichy',
      text: 'Corporate event transportation was flawless. Will definitely use them again for our annual meet.',
      rating: 5,
      rotation: 1.5,
      photo: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80'
    },
    {
      name: 'Meena Sundaram',
      city: 'Erode',
      text: 'The Bali trip was a dream come true! Ganesan sir personally ensured everything went smoothly.',
      rating: 5,
      rotation: -2,
      photo: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80'
    }
  ];

  displayList: Testimonial[] = [];
  activeIndex = 0;
  autoPlayInterval: any;
  isPaused = false;
  
  touchStartX = 0;
  touchEndX = 0;

  @ViewChild('track') trackRef!: ElementRef;

  ngOnInit() {
    // Clone lists to ensure infinite wrap loop buffer
    this.displayList = [...this.testimonials, ...this.testimonials, ...this.testimonials];
    this.activeIndex = this.testimonials.length;
    this.startAutoPlay();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToActiveIndex(false);
    }, 150);
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize')
  onResize() {
    this.scrollToActiveIndex(false);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      if (!this.isPaused) {
        this.next();
      }
    }, 4500);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }

  next() {
    this.activeIndex++;
    this.scrollToActiveIndex(true);
    
    if (this.activeIndex >= this.testimonials.length * 2) {
      setTimeout(() => {
        this.activeIndex = this.testimonials.length;
        this.scrollToActiveIndex(false);
      }, 600);
    }
  }

  prev() {
    this.activeIndex--;
    this.scrollToActiveIndex(true);

    if (this.activeIndex < this.testimonials.length) {
      setTimeout(() => {
        this.activeIndex = this.testimonials.length * 2 - 1;
        this.scrollToActiveIndex(false);
      }, 600);
    }
  }

  scrollToActiveIndex(animate: boolean) {
    if (!this.trackRef) return;
    const track = this.trackRef.nativeElement;
    const cards = track.children;
    if (cards.length === 0) return;
    
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 24;
    const offset = -(this.activeIndex * (cardWidth + gap));
    
    if (animate) {
      track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
    } else {
      track.style.transition = 'none';
    }
    
    track.style.transform = `translateX(${offset}px)`;
  }

  onTouchStart(e: TouchEvent) {
    this.pause();
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchMove(e: TouchEvent) {
    // Optional dragging feedback
  }

  onTouchEnd(e: TouchEvent) {
    this.touchEndX = e.changedTouches[0].clientX;
    this.handleSwipe();
    this.resume();
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;
    if (diff > swipeThreshold) {
      this.next();
    } else if (diff < -swipeThreshold) {
      this.prev();
    }
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
