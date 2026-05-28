import { Component, Input, AfterViewInit, ElementRef, ViewChild, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

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

  @ViewChild('headingEl') headingEl!: ElementRef;
  @ViewChild('containerEl') containerEl!: ElementRef;

  letters: string[] = [];
  status: 'idle' | 'drive' | 'park' = 'idle';
  busEndPx: number = 660;
  revealed = false;

  constructor(private animationService: AnimationService) {}

  ngOnInit(): void {
    this.letters = this.text.split('');
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
