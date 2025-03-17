// scroll-area.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sc-scroll-area3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="scroll-area-root">
      <div
        class="scroll-area-viewport"
        #viewport
        (scroll)="onScroll()"
        (mouseenter)="isHovering = true"
        (mouseleave)="isHovering = false"
      >
        <div class="content">
          <p>
            Vernacular architecture is building done outside any academic tradition, and without
            professional guidance. It is not a particular architectural movement or style, but
            rather a broad category, encompassing a wide range and variety of building types, with
            differing methods of construction, from around the world, both historical and extant and
            classical and modern. Vernacular architecture constitutes 95% of the world's built
            environment, as estimated in 1995 by Amos Rapoport, as measured against the small
            percentage of new buildings every year designed by architects and built by engineers.
          </p>
          <p>
            This type of architecture usually serves immediate, local needs, is constrained by the
            materials available in its particular region and reflects local traditions and cultural
            practices. The study of vernacular architecture does not examine formally schooled
            architects, but instead that of the design skills and tradition of local builders, who
            were rarely given any attribution for the work. More recently, vernacular architecture
            has been examined by designers and the building industry in an effort to be more energy
            conscious with contemporary design and construction—part of a broader interest in
            sustainable design.
          </p>
        </div>
      </div>
      <div class="scroll-area-scrollbar" [class.visible]="isScrolling || isHovering">
        <div
          class="scroll-area-thumb"
          #thumb
          [style.height.%]="thumbHeight"
          [style.top.%]="thumbTop"
          (mousedown)="startDragging($event)"
        ></div>
      </div>
    </div>
  `,
  styles: [
    `
      .scroll-area-root {
        height: 8.5rem;
        width: 24rem;
        max-width: calc(100vw - 8rem);
        position: relative;
      }

      .scroll-area-viewport {
        height: 100%;
        overflow-y: scroll;
        overscroll-behavior: contain;
        border-radius: 0.375rem;
        outline: 1px solid #e5e7eb;
        outline-offset: -1px;
        /* Hide default scrollbar for Chrome, Safari and Opera */
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      /* Hide default scrollbar for IE, Edge and Firefox */
      .scroll-area-viewport::-webkit-scrollbar {
        display: none;
      }

      .scroll-area-viewport:focus-visible {
        outline-width: 2px;
        outline-color: #1e40af;
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0.75rem 1.5rem 0.75rem 1rem;
        font-size: 0.875rem;
        line-height: 1.375rem;
        color: #111827;
      }

      .scroll-area-scrollbar {
        position: absolute;
        top: 0;
        right: 0.25rem;
        width: 0.25rem;
        height: calc(100% - 1rem);
        margin: 0.5rem 0;
        border-radius: 9999px;
        background-color: #e5e7eb;
        opacity: 0;
        transition: opacity 0.3s;
        transition-delay: 0.3s;
      }

      .scroll-area-scrollbar.visible {
        opacity: 1;
        transition-delay: 0s;
        transition-duration: 0.075s;
      }

      .scroll-area-thumb {
        position: absolute;
        width: 100%;
        border-radius: 9999px;
        background-color: #6b7280;
        cursor: pointer;
      }
    `,
  ],
})
export class ScrollAreaComponent {
  @ViewChild('viewport') viewportRef!: ElementRef<HTMLDivElement>;
  @ViewChild('thumb') thumbRef!: ElementRef<HTMLDivElement>;

  isScrolling = false;
  isHovering = false;
  isDragging = false;
  scrollTimeout: any;
  thumbHeight = 20;
  thumbTop = 0;
  startY = 0;
  startScrollTop = 0;

  constructor() {
    // Add document-level event listeners for drag operations
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  ngOnDestroy() {
    // Clean up event listeners
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
    document.removeEventListener('mouseup', this.onMouseUp.bind(this));
  }

  ngAfterViewInit() {
    this.updateThumb();
  }

  onScroll() {
    this.updateThumb();
    this.isScrolling = true;

    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 300);
  }

  updateThumb() {
    const viewport = this.viewportRef.nativeElement;
    const scrollHeight = viewport.scrollHeight;
    const clientHeight = viewport.clientHeight;

    // Calculate thumb height as percentage of visible area
    this.thumbHeight = (clientHeight / scrollHeight) * 100;

    // Calculate thumb position
    this.thumbTop = (viewport.scrollTop / (scrollHeight - clientHeight)) * (100 - this.thumbHeight);
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.startY = event.clientY;
    this.startScrollTop = this.viewportRef.nativeElement.scrollTop;
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;

    const viewport = this.viewportRef.nativeElement;
    const deltaY = event.clientY - this.startY;
    const scrollbarHeight = viewport.clientHeight;
    const scrollContentHeight = viewport.scrollHeight;

    // Calculate the scroll ratio
    const scrollRatio = scrollContentHeight / scrollbarHeight;

    // Update scroll position
    viewport.scrollTop = this.startScrollTop + deltaY * scrollRatio;

    event.preventDefault();
  }

  onMouseUp() {
    this.isDragging = false;
  }
}
