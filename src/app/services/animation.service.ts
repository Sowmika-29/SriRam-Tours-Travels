import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimationService {

  /**
   * Observe an element and trigger callback when it enters viewport
   */
  observeElement(element: HTMLElement, callback: () => void, threshold = 0.15): IntersectionObserver {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    }, { threshold });

    observer.observe(element);
    return observer;
  }

  /**
   * Animate counting from 0 to target number
   */
  animateCounter(element: HTMLElement, target: number, duration = 2000, suffix = ''): void {
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(eased * target);
      element.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target.toLocaleString() + suffix;
      }
    };

    requestAnimationFrame(update);
  }

  /**
   * Typewriter effect — types text character by character
   */
  typewriterEffect(element: HTMLElement, text: string, speed = 60): Promise<void> {
    return new Promise((resolve) => {
      element.textContent = '';
      let i = 0;

      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      cursor.textContent = '|';
      element.appendChild(cursor);

      const interval = setInterval(() => {
        if (i < text.length) {
          const textNode = document.createTextNode(text.charAt(i));
          element.insertBefore(textNode, cursor);
          i++;
        } else {
          clearInterval(interval);
          // Fade out cursor
          setTimeout(() => {
            cursor.style.opacity = '0';
            cursor.style.transition = 'opacity 0.5s';
            resolve();
          }, 500);
        }
      }, speed);
    });
  }
}
