import { Component, Input, AfterViewInit, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

interface WordItem {
  letters: { char: string; globalIndex: number; }[];
}

@Component({
  selector: 'app-animated-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-heading.component.html',
  styleUrl: './animated-heading.component.scss'
})
export class AnimatedHeadingComponent implements OnInit, AfterViewInit {
  @Input() text: string = '';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() subtitle: string = '';
  @Input() vehicle: 'bus' | 'car' | 'bike' | 'plane' = 'bus';

  @ViewChild('headingEl') headingEl!: ElementRef;
  @ViewChild('containerEl') containerEl!: ElementRef;

  words: WordItem[] = [];
  totalLettersCount = 0;
  status: 'idle' | 'drive' | 'park' = 'idle';
  busEndPx: number = 660;
  revealed = false;

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    const rawWords = this.text.split(' ');
    let charCounter = 0;
    
    this.words = rawWords.map(word => {
      const letters = word.split('').map(char => {
        const globalIndex = charCounter++;
        return { char, globalIndex };
      });
      charCounter++; // Account for space
      return { letters };
    });
    
    this.totalLettersCount = charCounter;
  }

  ngAfterViewInit(): void {
    this.calculateBusEnd();
    
    // Trigger on viewport enter
    if (this.containerEl) {
      this.animationService.observeElement(this.containerEl.nativeElement, () => {
        this.triggerAnimation();
      });
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateBusEnd();
  }

  calculateBusEnd() {
    setTimeout(() => {
      if (this.headingEl) {
        const textWidth = this.headingEl.nativeElement.offsetWidth;
        // The bus is 56px wide. We want it to clear the heading completely.
        this.busEndPx = textWidth + 10;
      }
    }, 50);
  }

  triggerAnimation() {
    if (this.revealed) return;
    this.revealed = true;
    this.calculateBusEnd();
    this.status = 'drive';

    // Transition to park after the 1.6s bus roll animation finishes
    setTimeout(() => {
      this.status = 'park';
    }, 1600);
  }
}
