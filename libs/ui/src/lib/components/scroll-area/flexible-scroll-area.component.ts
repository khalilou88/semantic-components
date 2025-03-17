// flexible-scroll-area.component.ts
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'sc-flexible-scroll-area',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="relative"
      [ngClass]="{
        'w-full max-w-4xl': orientation === 'horizontal',
        'h-[8.5rem] w-96 max-w-[calc(100vw-8rem)]': orientation === 'vertical',
      }"
    >
      <!-- Main scroll container -->
      <div
        class="overscroll-contain rounded-md outline outline-1 -outline-offset-1 outline-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 scrollbar-hide"
        #viewport
        [ngClass]="{
          'overflow-x-scroll overflow-y-hidden h-64': orientation === 'horizontal',
          'overflow-y-scroll overflow-x-hidden h-full': orientation === 'vertical',
        }"
        (scroll)="onScroll()"
        (mouseenter)="isHovering = true"
        (mouseleave)="isHovering = false"
      >
        <!-- Content container -->
        <div
          [ngClass]="{
            'flex flex-row gap-4 p-4 min-w-max': orientation === 'horizontal',
            'flex flex-col gap-4 py-3 pr-6 pl-4 text-sm leading-[1.375rem] text-gray-900':
              orientation === 'vertical',
          }"
        >
          <!-- Cards for horizontal scrolling -->
          <ng-container *ngIf="orientation === 'horizontal'">
            <div
              class="bg-white rounded-lg shadow-md w-64 h-52 flex-shrink-0 border border-gray-200 hover:border-blue-500 transition-colors duration-200"
              *ngFor="let item of items"
            >
              <div class="p-4 h-full flex flex-col">
                <h3 class="text-lg font-medium text-gray-900 mb-2">{{ item.title }}</h3>
                <p class="text-sm text-gray-600 flex-grow">{{ item.description }}</p>
                <div class="mt-4 text-xs text-gray-500">{{ item.category }}</div>
              </div>
            </div>
          </ng-container>

          <!-- Text content for vertical scrolling -->
          <ng-container *ngIf="orientation === 'vertical'">
            <p>
              Vernacular architecture is building done outside any academic tradition, and without
              professional guidance. It is not a particular architectural movement or style, but
              rather a broad category, encompassing a wide range and variety of building types, with
              differing methods of construction, from around the world, both historical and extant
              and classical and modern. Vernacular architecture constitutes 95% of the world's built
              environment, as estimated in 1995 by Amos Rapoport, as measured against the small
              percentage of new buildings every year designed by architects and built by engineers.
            </p>
            <p>
              This type of architecture usually serves immediate, local needs, is constrained by the
              materials available in its particular region and reflects local traditions and
              cultural practices. The study of vernacular architecture does not examine formally
              schooled architects, but instead that of the design skills and tradition of local
              builders, who were rarely given any attribution for the work. More recently,
              vernacular architecture has been examined by designers and the building industry in an
              effort to be more energy conscious with contemporary design and construction—part of a
              broader interest in sustainable design.
            </p>
            <p>
              Vernacular architecture can be contrasted against elite or polite architecture, which
              is characterized by stylistic elements of design intentionally incorporated for
              aesthetic purposes which go beyond a building's functional requirements. This article
              focuses on the traditional meanings of the vernacular architecture and examines its
              relation to the wider realm of ordinary buildings and everyday landscapes.
            </p>
          </ng-container>
        </div>
      </div>

      <!-- Custom scrollbar -->
      <div
        class="absolute top-0 right-1 w-1 h-[calc(100%-0.5rem)] my-1 rounded-full bg-gray-200 opacity-0 transition-opacity delay-300"
        *ngIf="orientation === 'vertical'"
        [ngClass]="{ 'opacity-100 delay-0 duration-75': isScrolling || isHovering }"
      >
        <div
          class="absolute w-full rounded-full bg-gray-500 cursor-pointer"
          #verticalThumb
          [style.height.%]="thumbSize"
          [style.top.%]="thumbPosition"
          (mousedown)="startDragging($event)"
        ></div>
      </div>

      <div
        class="absolute bottom-0 left-0 right-4 h-1 mx-2 rounded-full bg-gray-200 opacity-0 transition-opacity delay-300"
        *ngIf="orientation === 'horizontal'"
        [ngClass]="{ 'opacity-100 delay-0 duration-75': isScrolling || isHovering }"
      >
        <div
          class="absolute h-full rounded-full bg-gray-500 cursor-pointer"
          #horizontalThumb
          [style.width.%]="thumbSize"
          [style.left.%]="thumbPosition"
          (mousedown)="startDragging($event)"
        ></div>
      </div>

      <!-- Navigation buttons for horizontal scrolling -->
      <ng-container *ngIf="orientation === 'horizontal'">
        <button
          class="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md p-2 opacity-0 transition-opacity duration-200"
          [ngClass]="{ 'opacity-100': isHovering && canScrollStart }"
          [disabled]="!canScrollStart"
          (click)="scrollPrev()"
          aria-label="Scroll left"
        >
          <svg
            class="h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          class="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md p-2 opacity-0 transition-opacity duration-200"
          [ngClass]="{ 'opacity-100': isHovering && canScrollEnd }"
          [disabled]="!canScrollEnd"
          (click)="scrollNext()"
          aria-label="Scroll right"
        >
          <svg
            class="h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </ng-container>

      <!-- Navigation buttons for vertical scrolling -->
      <ng-container *ngIf="orientation === 'vertical'">
        <button
          class="absolute top-2 left-1/2 -translate-x-1/2 bg-white/80 hover:bg-white rounded-full shadow-md p-2 opacity-0 transition-opacity duration-200"
          [ngClass]="{ 'opacity-100': isHovering && canScrollStart }"
          [disabled]="!canScrollStart"
          (click)="scrollPrev()"
          aria-label="Scroll up"
        >
          <svg
            class="h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        <button
          class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 hover:bg-white rounded-full shadow-md p-2 opacity-0 transition-opacity duration-200"
          [ngClass]="{ 'opacity-100': isHovering && canScrollEnd }"
          [disabled]="!canScrollEnd"
          (click)="scrollNext()"
          aria-label="Scroll down"
        >
          <svg
            class="h-5 w-5 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </ng-container>
    </div>
  `,
  styles: [
    `
      /* Hide default scrollbar for Chrome, Safari and Opera */
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }

      /* Hide default scrollbar for IE, Edge and Firefox */
      .scrollbar-hide {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    `,
  ],
})
export class FlexibleScrollAreaComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @ViewChild('viewport') viewportRef!: ElementRef<HTMLDivElement>;
  @ViewChild('verticalThumb') verticalThumbRef?: ElementRef<HTMLDivElement>;
  @ViewChild('horizontalThumb') horizontalThumbRef?: ElementRef<HTMLDivElement>;

  isScrolling = false;
  isHovering = false;
  isDragging = false;
  scrollTimeout: any;
  thumbSize = 20;
  thumbPosition = 0;
  startPoint = 0;
  startScrollPosition = 0;
  canScrollStart = false;
  canScrollEnd = true;

  // Sample items for horizontal scrolling
  items = Array(15)
    .fill(0)
    .map((_, i) => ({
      title: `Item ${i + 1}`,
      description: `This is a description for item ${i + 1}. It contains some sample text to demonstrate the scrolling functionality.`,
      category: ['Design', 'Development', 'Marketing', 'Research'][i % 4],
    }));

  constructor() {
    // Add document-level event listeners for drag operations
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  ngOnInit() {
    // Initial check to make sure we have a valid orientation
    if (this.orientation !== 'vertical' && this.orientation !== 'horizontal') {
      this.orientation = 'vertical';
    }
  }

  ngOnDestroy() {
    // Clean up event listeners
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
  }

  ngAfterViewInit() {
    this.updateThumb();
    this.updateScrollButtonsState();
  }

  onScroll() {
    this.updateThumb();
    this.updateScrollButtonsState();
    this.isScrolling = true;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 300);
  }

  updateThumb() {
    const viewport = this.viewportRef.nativeElement;

    if (this.orientation === 'vertical') {
      const scrollHeight = viewport.scrollHeight;
      const clientHeight = viewport.clientHeight;

      // Calculate thumb height as percentage of visible area
      this.thumbSize = (clientHeight / scrollHeight) * 100;

      // Calculate thumb position
      this.thumbPosition =
        (viewport.scrollTop / (scrollHeight - clientHeight)) * (100 - this.thumbSize);
    } else {
      const scrollWidth = viewport.scrollWidth;
      const clientWidth = viewport.clientWidth;

      // Calculate thumb width as percentage of visible area
      this.thumbSize = (clientWidth / scrollWidth) * 100;

      // Calculate thumb position
      this.thumbPosition =
        (viewport.scrollLeft / (scrollWidth - clientWidth)) * (100 - this.thumbSize);
    }
  }

  updateScrollButtonsState() {
    const viewport = this.viewportRef.nativeElement;

    if (this.orientation === 'vertical') {
      this.canScrollStart = viewport.scrollTop > 0;
      this.canScrollEnd = viewport.scrollTop < viewport.scrollHeight - viewport.clientHeight;
    } else {
      this.canScrollStart = viewport.scrollLeft > 0;
      this.canScrollEnd = viewport.scrollLeft < viewport.scrollWidth - viewport.clientWidth;
    }
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;

    if (this.orientation === 'vertical') {
      this.startPoint = event.clientY;
      this.startScrollPosition = this.viewportRef.nativeElement.scrollTop;
    } else {
      this.startPoint = event.clientX;
      this.startScrollPosition = this.viewportRef.nativeElement.scrollLeft;
    }

    event.preventDefault();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const viewport = this.viewportRef.nativeElement;

    if (this.orientation === 'vertical') {
      const deltaY = event.clientY - this.startPoint;
      const scrollbarHeight = viewport.clientHeight;
      const scrollContentHeight = viewport.scrollHeight;

      // Calculate the scroll ratio
      const scrollRatio = scrollContentHeight / scrollbarHeight;

      // Update scroll position
      viewport.scrollTop = this.startScrollPosition + deltaY * scrollRatio;
    } else {
      const deltaX = event.clientX - this.startPoint;
      const scrollbarWidth = viewport.clientWidth;
      const scrollContentWidth = viewport.scrollWidth;

      // Calculate the scroll ratio
      const scrollRatio = scrollContentWidth / scrollbarWidth;

      // Update scroll position
      viewport.scrollLeft = this.startScrollPosition + deltaX * scrollRatio;
    }

    event.preventDefault();
  }

  onMouseUp() {
    this.isDragging = false;
  }

  scrollPrev() {
    const viewport = this.viewportRef.nativeElement;

    if (this.orientation === 'vertical') {
      viewport.scrollBy({ top: -200, behavior: 'smooth' });
    } else {
      viewport.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollNext() {
    const viewport = this.viewportRef.nativeElement;

    if (this.orientation === 'vertical') {
      viewport.scrollBy({ top: 200, behavior: 'smooth' });
    } else {
      viewport.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}
