import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

// Define interfaces for our heading structure
interface HeadingNode {
  id: string;
  text: string;
  level: number;
  children: HeadingNode[];
}

@Component({
  selector: 'sc-on-this-page',
  imports: [CommonModule],
  template: `
    <div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto p-4 w-64">
      <h3 class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">On this page</h3>

      <nav class="space-y-1">
        <ng-container
          *ngTemplateOutlet="headingsList; context: { $implicit: hierarchicalHeadings }"
        ></ng-container>
      </nav>
    </div>

    <!-- Recursive template for nested headings -->
    <ng-template #headingsList let-headings>
      <ul class="space-y-2">
        <li class="text-sm" *ngFor="let heading of headings">
          <a
            class="block py-1 transition-colors duration-200 hover:text-blue-600"
            [attr.href]="'#' + heading.id"
            [ngClass]="{
              'text-blue-600 font-medium': activeSection === heading.id,
              'text-gray-600': activeSection !== heading.id,
            }"
            (click)="$event.preventDefault(); scrollToSection(heading.id)"
          >
            {{ heading.text }}
          </a>

          <!-- Recursively render children if they exist -->
          <div
            class="ml-4 mt-2"
            *ngIf="heading.children && heading.children.length > 0"
            [ngClass]="{ block: isSectionActive(heading.id), hidden: !isSectionActive(heading.id) }"
          >
            <ng-container
              *ngTemplateOutlet="headingsList; context: { $implicit: heading.children }"
            ></ng-container>
          </div>
        </li>
      </ul>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOnThisPage implements OnInit, AfterViewInit, OnDestroy {
  headings: HeadingNode[] = [];

  // Track active section
  activeSection: string | null = null;

  // Store observer instances for cleanup
  private observer: IntersectionObserver | null = null;

  // Hierarchical structure for display
  hierarchicalHeadings: HeadingNode[] = [];

  ngOnInit(): void {
    this.detectHeadings();

    // Build hierarchical structure
    this.buildHierarchy();
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    // Clean up observer when component is destroyed
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  detectHeadings(): void {
    // Find all h2, h3 and h4 elements on the page
    const headingElements = document.querySelectorAll('h2, h3, h4');

    headingElements.forEach((heading) => {
      // Ensure the heading has an id, create one if not
      if (!heading.id) {
        heading.id = this.generateId(heading.textContent ?? '');
      }

      this.headings.push({
        id: heading.id,
        text: heading.textContent ?? '',
        level: parseInt(heading.tagName.charAt(1), 10),
        children: [],
      });
    });
  }

  // Generate URL-friendly ID from text
  generateId(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  // Build hierarchical structure from flat headings list
  buildHierarchy(): void {
    // Don't process if no headings
    if (this.headings.length === 0) return;

    // Sort headings by their appearance in the document
    const sortedHeadings = [...this.headings];

    // Initialize result
    this.hierarchicalHeadings = [];

    // Keep track of the current parent at each level
    const parentStack: HeadingNode[] = [];

    // Process each heading
    sortedHeadings.forEach((heading) => {
      const newNode: HeadingNode = {
        id: heading.id,
        text: heading.text,
        level: heading.level,
        children: [],
      };

      // If this is a top-level heading or the stack is empty
      if (heading.level === 2 || parentStack.length === 0) {
        this.hierarchicalHeadings.push(newNode);
        // Clear the stack and add this as the new potential parent
        parentStack.length = 0;
        parentStack.push(newNode);
        return;
      }

      // Find the appropriate parent
      while (parentStack.length > 0 && parentStack[parentStack.length - 1].level >= heading.level) {
        parentStack.pop();
      }

      // If we have a valid parent
      if (parentStack.length > 0) {
        parentStack[parentStack.length - 1].children.push(newNode);
      } else {
        // No valid parent found, add to root
        this.hierarchicalHeadings.push(newNode);
      }

      // Add this as a potential parent for future headings
      parentStack.push(newNode);
    });
  }

  // Set up IntersectionObserver to track visible sections
  setupIntersectionObserver(): void {
    // Don't run if no headings
    if (this.headings.length === 0) return;

    const options = {
      rootMargin: '-100px 0px -80% 0px', // Adjust these values to control when a section is considered "active"
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Get the id of the element
        const id = entry.target.id;

        // If the element is intersecting (visible)
        if (entry.isIntersecting) {
          this.activeSection = id;
        }
      });
    }, options);

    // Observe all the heading elements
    this.headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        this.observer!.observe(element);
      }
    });
  }

  // Scroll to section when clicked
  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = id;
    }
  }

  // Helper function to check if a section is active or contains an active child
  isSectionActive(id: string): boolean {
    return this.activeSection === id || this.hasActiveChild(id);
  }

  // Check if a section has an active child
  hasActiveChild(parentId: string): boolean {
    // Flat list of all headings - check if any active heading is a child of this one
    const findChildren = (headings: HeadingNode[]): string[] => {
      // Get index of parent
      const parentIndex = headings.findIndex((h) => h.id === parentId);
      if (parentIndex === -1) return [];

      const parentLevel = headings[parentIndex].level;
      const result: string[] = [];

      // Look at all headings after parent
      for (let i = parentIndex + 1; i < headings.length; i++) {
        const heading = headings[i];
        // If we encounter another heading at the same or higher level, we're done with this parent's children
        if (heading.level <= parentLevel) break;
        result.push(heading.id);
      }

      return result;
    };

    const children = findChildren(this.headings);
    return children.includes(this.activeSection ?? '');
  }
}
