import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

interface NavItem {
  id: string;
  text: string;
  level: number;
  children: NavItem[];
  isActive: boolean;
}

@Component({
  selector: 'sc-on-this-page',
  imports: [CommonModule],
  template: `
    <div
      class="sticky top-8 max-h-[calc(100vh-2rem)] overflow-y-auto p-4 border-l border-gray-200 w-64"
    >
      <h4 class="text-base font-semibold mb-4 text-gray-800">On This Page</h4>
      <nav>
        <ng-container
          *ngTemplateOutlet="navTemplate; context: { items: navItems, level: 1 }"
        ></ng-container>
      </nav>
    </div>

    <!-- Recursive template for nested navigation -->
    <ng-template #navTemplate let-items="items" let-level="level">
      <ul class="list-none p-0 m-0">
        <li class="mb-2 text-sm" *ngFor="let item of items">
          <button
            [ngClass]="[
              item.isActive
                ? 'text-blue-600 font-medium border-l-2 border-blue-600'
                : 'text-gray-600 border-l-2 border-transparent',
              'block py-1 transition-all duration-200 ease-in-out cursor-pointer hover:text-blue-600',
              getPaddingClass(level),
            ]"
            (click)="scrollToSection(item.id)"
          >
            {{ item.text }}
          </button>
          <ng-container *ngIf="item.children && item.children.length > 0">
            <ng-container
              *ngTemplateOutlet="navTemplate; context: { items: item.children, level: level + 1 }"
            ></ng-container>
          </ng-container>
        </li>
      </ul>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScOnThisPage implements OnInit, OnDestroy {
  navItems: NavItem[] = [];
  private observer: IntersectionObserver | null = null;
  private readonly observedElements: Element[] = [];

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.initNavItems();
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initNavItems(): void {
    // Get all heading elements (h1, h2, h3, etc.) in the main content
    const headings = document.querySelectorAll(
      'main h1, main h2, main h3, main h4, main h5, main h6',
    );

    // Root-level items array
    const rootItems: NavItem[] = [];

    // Stack to keep track of parent elements at different levels
    const stack: NavItem[][] = [rootItems];

    headings.forEach((heading) => {
      // Get the text content and ID of the heading
      const text = heading.textContent || '';
      let id = heading.getAttribute('id');

      // If no ID exists, create one based on the text
      if (!id) {
        id = text.toLowerCase().replace(/\s+/g, '-');
        this.renderer.setAttribute(heading, 'id', id);
      }

      // Determine the level (h1 = 1, h2 = 2, etc.)
      const level = parseInt(heading.tagName.charAt(1));

      // Create a new nav item
      const newItem: NavItem = {
        id,
        text,
        level,
        children: [],
        isActive: false,
      };

      // Add to observation list
      this.observedElements.push(heading);

      // Ensure we have enough levels in our stack
      while (stack.length <= level) {
        stack.push([]);
      }

      // Add this item to the appropriate level in the stack
      stack[level].push(newItem);

      // If this isn't the top level, add it as a child to the last item of the previous level
      if (level > 1 && stack[level - 1].length > 0) {
        const parent = stack[level - 1][stack[level - 1].length - 1];
        parent.children.push(newItem);
      } else {
        // Otherwise, it's a top-level item
        rootItems.push(newItem);
      }
    });

    this.navItems = rootItems;
  }

  private setupIntersectionObserver(): void {
    const options = {
      rootMargin: '-100px 0px -80% 0px',
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) {
            this.setActiveItem(id);
          }
        }
      });
    }, options);

    // Observe all heading elements
    this.observedElements.forEach((el) => {
      this.observer?.observe(el);
    });
  }

  private setActiveItem(id: string): void {
    // Recursive function to set active status
    const setActive = (items: NavItem[]): boolean => {
      for (const item of items) {
        // Reset activity first
        item.isActive = false;

        // Check if this is the active item
        if (item.id === id) {
          item.isActive = true;
          return true;
        }

        // Check children
        if (item.children.length > 0 && setActive(item.children)) {
          item.isActive = true;
          return true;
        }
      }
      return false;
    };

    setActive(this.navItems);
  }

  // Function to get padding based on level
  getPaddingClass(level: number): string {
    const padding = (level - 1) * 4; // 4 = 1rem in Tailwind (multiply by 0.25rem)
    return `pl-${padding}`;
  }

  // Function to scroll to a section when nav item is clicked
  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
