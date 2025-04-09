import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

import { Subscription } from 'rxjs';

import { TocService } from './toc.service';

@Directive({
  selector: '[tocHeading]',
})
export class TocHeadingDirective implements OnInit, AfterViewInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly tocService = inject(TocService);

  private readonly element: HTMLElement;
  private level = 0;
  private id = '';
  private readonly scrollSubscription: Subscription | null = null;
  private intersectionObserver: IntersectionObserver | null = null;

  constructor() {
    const el = this.el;

    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    // Determine the heading level from the tag name
    const tagName = this.element.tagName.toLowerCase();
    if (/^h[1-6]$/.exec(tagName)) {
      this.level = parseInt(tagName.substring(1), 10);
    }

    // Ensure the element has an ID
    if (!this.element.id) {
      // Generate an ID based on the text content
      this.element.id = this.generateId(this.element.textContent ?? 'heading');
    }

    this.id = this.element.id;
  }

  ngAfterViewInit(): void {
    // Get text content (either from input or element)
    const text = this.element.textContent ?? '';

    // Register this heading with the TOC service
    this.tocService.registerHeading(this.id, this.level, text.trim());

    // Set up intersection observer for tracking when this heading is in view
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    // Unregister this heading when the directive is destroyed
    this.tocService.unregisterHeading(this.id);

    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    // Create an intersection observer to detect when this heading is in view
    const options = {
      rootMargin: '-80px 0px -80% 0px', // Adjust these values for your design
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.tocService.setActiveItem(this.id);
        }
      });
    }, options);

    this.intersectionObserver.observe(this.element);
  }

  /**
   * Generate a URL-friendly ID from text
   */
  private generateId(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-)|(-$)/g, '')
      .substring(0, 50);
  }
}
