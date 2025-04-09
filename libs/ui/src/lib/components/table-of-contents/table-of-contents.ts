import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';

// Automatically detects sections with the <section id="..."> format
// Uses IntersectionObserver to track which sections are in view
// Highlights the active section in the TOC
// Implements smooth scrolling when clicking TOC links
// Updates URL hash without causing page jumps
// Works with any content structure that uses section tags with IDs
// Clean separation of concerns between component, template, and styles

export interface ScSection {
  id: string;
  title: string;
  element: HTMLElement;
}

@Component({
  selector: 'sc-table-of-contents',
  imports: [CommonModule],
  template: `
    <div
      class="sticky top-8 self-start w-64 max-h-[90vh] overflow-y-auto p-4 bg-gray-50 rounded-lg shadow-md"
    >
      <h3 class="text-lg font-semibold mb-4">Table of Contents</h3>
      <ul class="space-y-1">
        @for (section of sections(); track section) {
          <li>
            <a
              class="block py-2 pl-4 border-l-2 transition-all duration-200 rounded-r"
              [ngClass]="{
                'border-blue-600 text-blue-600 font-medium bg-blue-50':
                  activeSection() === section.id,
                'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100':
                  activeSection() !== section.id,
              }"
              (click)="scrollToSection($event, section.id)"
              href="#{{ section.id }}"
            >
              {{ section.title }}
            </a>
          </li>
        }
      </ul>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTableOfContents implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef);

  sections = signal<ScSection[]>([]);
  activeSection = signal('');
  private observer: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    // After the view is initialized, find all sections
    this.initializeToc();
  }

  ngOnDestroy(): void {
    // Clean up the observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initializeToc(): void {
    // Get all sections from the document (with section tag and id attribute)
    const foundSections = Array.from(document.querySelectorAll('section[id]'));

    this.sections.set(
      foundSections.map((section) => ({
        id: section.id,
        title: section.querySelector('h2')?.textContent ?? 'Untitled Section',
        element: section as HTMLElement,
      })),
    );

    // Set up and start the intersection observer
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver(): void {
    const options = {
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    // Start observing each section
    this.sections().forEach((section) => {
      this.observer?.observe(section.element);
    });
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Update URL without triggering navigation
      window.history.pushState(null, '', `#${sectionId}`);
    }
  }
}
