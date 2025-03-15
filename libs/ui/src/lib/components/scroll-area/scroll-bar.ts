import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'sc-scroll-bar',
  imports: [CommonModule],
  template: `
    <div
      class="flex touch-none select-none transition-colors"
      #scrollbar
      [class.h-full]="orientation === 'vertical'"
      [class.w-2.5]="orientation === 'vertical'"
      [class.border-l]="orientation === 'vertical'"
      [class.border-l-transparent]="orientation === 'vertical'"
      [class.p-[1px]]="orientation === 'vertical'"
      [class.absolute]="orientation === 'vertical'"
      [class.right-0]="orientation === 'vertical'"
      [class.top-0]="orientation === 'vertical'"
      [class.bottom-[2.5px]]="orientation === 'vertical'"
      [class.h-2.5]="orientation === 'horizontal'"
      [class.flex-col]="orientation === 'horizontal'"
      [class.border-t]="orientation === 'horizontal'"
      [class.border-t-transparent]="orientation === 'horizontal'"
      [class.p-[1px]]="orientation === 'horizontal'"
      [class.absolute]="orientation === 'horizontal'"
      [class.bottom-0]="orientation === 'horizontal'"
      [class.left-0]="orientation === 'horizontal'"
      [class.right-[2.5px]]="orientation === 'horizontal'"
      [style.display]="isVisible ? 'flex' : 'none'"
    >
      <div
        class="relative flex-1 rounded-full bg-border"
        #thumb
        [style.transform]="thumbTransform"
        [style.height]="thumbSize"
        [style.width]="orientation === 'horizontal' ? thumbSize : '100%'"
      ></div>
    </div>
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollBar implements AfterViewInit, OnDestroy {
  readonly classInput = input<string>('', {
    alias: 'class',
  });

  protected readonly class = computed(() => cn('block', this.classInput()));

  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() viewportElement!: ElementRef<HTMLElement> | HTMLElement;

  @ViewChild('scrollbar') scrollbarEl!: ElementRef<HTMLElement>;
  @ViewChild('thumb') thumbEl!: ElementRef<HTMLElement>;

  isVisible = false;
  thumbSize = '0px';
  thumbTransform = '';

  private resizeObserver?: ResizeObserver;
  private mutationObserver?: MutationObserver;
  private readonly scrollHandler = () => this.handleScroll();

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.initialize(), 0);
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private initialize(): void {
    const viewport = this.getViewportElement();
    if (!viewport) return;

    // Listen for scroll events
    viewport.addEventListener('scroll', this.scrollHandler, { passive: true });

    // Create observers
    this.setupResizeObserver(viewport);
    this.setupMutationObserver(viewport);

    // Initial update
    this.updateScrollbarVisibility();
    this.updateThumbSize();
    this.updateThumbPosition();

    // Setup drag functionality
    this.setupDragHandling();
  }

  private getViewportElement(): HTMLElement | null {
    if (!this.viewportElement) return null;
    return this.viewportElement instanceof ElementRef
      ? this.viewportElement.nativeElement
      : this.viewportElement;
  }

  private handleScroll(): void {
    // Direct DOM manipulation for better performance
    const viewport = this.getViewportElement();
    const thumb = this.thumbEl?.nativeElement;
    if (!viewport || !thumb) return;

    if (this.orientation === 'vertical') {
      const scrollRatio = viewport.scrollTop / (viewport.scrollHeight - viewport.clientHeight);
      const trackSize = this.scrollbarEl.nativeElement.clientHeight;
      const thumbSize = thumb.clientHeight;
      const offset = scrollRatio * (trackSize - thumbSize);

      thumb.style.transform = `translateY(${offset}px)`;
    } else {
      const scrollRatio = viewport.scrollLeft / (viewport.scrollWidth - viewport.clientWidth);
      const trackSize = this.scrollbarEl.nativeElement.clientWidth;
      const thumbSize = thumb.clientWidth;
      const offset = scrollRatio * (trackSize - thumbSize);

      thumb.style.transform = `translateX(${offset}px)`;
    }
  }

  private setupResizeObserver(element: HTMLElement): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.updateScrollbarVisibility();
      this.updateThumbSize();
      this.updateThumbPosition();
      this.cdr.detectChanges();
    });

    this.resizeObserver.observe(element);
  }

  private setupMutationObserver(element: HTMLElement): void {
    this.mutationObserver = new MutationObserver(() => {
      this.updateScrollbarVisibility();
      this.updateThumbSize();
      this.updateThumbPosition();
      this.cdr.detectChanges();
    });

    this.mutationObserver.observe(element, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  private updateScrollbarVisibility(): void {
    const viewport = this.getViewportElement();
    if (!viewport) return;

    const wasVisible = this.isVisible;

    if (this.orientation === 'vertical') {
      this.isVisible = viewport.scrollHeight > viewport.clientHeight;
    } else {
      this.isVisible = viewport.scrollWidth > viewport.clientWidth;
    }

    // Only trigger change detection if visibility changed
    if (wasVisible !== this.isVisible) {
      this.cdr.detectChanges();
    }
  }

  private updateThumbSize(): void {
    const viewport = this.getViewportElement();
    if (!viewport) return;

    const oldSize = this.thumbSize;

    if (this.orientation === 'vertical') {
      const viewportHeight = viewport.clientHeight;
      const contentHeight = viewport.scrollHeight;

      // Calculate thumb size proportionally
      const ratio = viewportHeight / contentHeight;
      const thumbHeight = Math.max(20, ratio * viewportHeight);

      this.thumbSize = `${thumbHeight}px`;
    } else {
      const viewportWidth = viewport.clientWidth;
      const contentWidth = viewport.scrollWidth;

      // Calculate thumb size proportionally
      const ratio = viewportWidth / contentWidth;
      const thumbWidth = Math.max(20, ratio * viewportWidth);

      this.thumbSize = `${thumbWidth}px`;
    }

    // Only trigger change detection if size changed
    if (oldSize !== this.thumbSize) {
      this.cdr.detectChanges();
    }
  }

  private updateThumbPosition(): void {
    const viewport = this.getViewportElement();
    if (!viewport || !this.thumbEl?.nativeElement) return;

    const oldTransform = this.thumbTransform;

    if (this.orientation === 'vertical') {
      const scrollRatio = viewport.scrollTop / (viewport.scrollHeight - viewport.clientHeight);
      const trackSize = this.scrollbarEl.nativeElement.clientHeight;
      const thumbSize = this.thumbEl.nativeElement.clientHeight;
      const offset = scrollRatio * (trackSize - thumbSize);

      this.thumbTransform = `translateY(${offset}px)`;
    } else {
      const scrollRatio = viewport.scrollLeft / (viewport.scrollWidth - viewport.clientWidth);
      const trackSize = this.scrollbarEl.nativeElement.clientWidth;
      const thumbSize = this.thumbEl.nativeElement.clientWidth;
      const offset = scrollRatio * (trackSize - thumbSize);

      this.thumbTransform = `translateX(${offset}px)`;
    }

    // Only trigger change detection if transform changed
    if (oldTransform !== this.thumbTransform) {
      this.cdr.detectChanges();
    }
  }

  private setupDragHandling(): void {
    const thumb = this.thumbEl?.nativeElement;
    if (!thumb) return;

    let isDragging = false;
    let startPosition = 0;
    let startScroll = 0;

    // Pointer down handler
    const onPointerDown = (e: PointerEvent) => {
      e.preventDefault();

      const viewport = this.getViewportElement();
      if (!viewport) return;

      isDragging = true;
      startPosition = this.orientation === 'vertical' ? e.clientY : e.clientX;
      startScroll = this.orientation === 'vertical' ? viewport.scrollTop : viewport.scrollLeft;

      document.documentElement.style.cursor = 'grabbing';
      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp);

      thumb.setPointerCapture(e.pointerId);
    };

    // Pointer move handler
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;

      const viewport = this.getViewportElement();
      if (!viewport) return;

      const currentPosition = this.orientation === 'vertical' ? e.clientY : e.clientX;
      const delta = currentPosition - startPosition;

      if (this.orientation === 'vertical') {
        const scrollbarHeight = this.scrollbarEl.nativeElement.clientHeight;
        const thumbHeight = this.thumbEl.nativeElement.clientHeight;
        const scrollRatio =
          (viewport.scrollHeight - viewport.clientHeight) / (scrollbarHeight - thumbHeight);
        viewport.scrollTop = startScroll + delta * scrollRatio;
      } else {
        const scrollbarWidth = this.scrollbarEl.nativeElement.clientWidth;
        const thumbWidth = this.thumbEl.nativeElement.clientWidth;
        const scrollRatio =
          (viewport.scrollWidth - viewport.clientWidth) / (scrollbarWidth - thumbWidth);
        viewport.scrollLeft = startScroll + delta * scrollRatio;
      }
    };

    // Pointer up handler
    const onPointerUp = () => {
      isDragging = false;
      document.documentElement.style.cursor = '';
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerUp);
    };

    // Add initial pointer down listener
    thumb.addEventListener('pointerdown', onPointerDown);
  }

  private cleanup(): void {
    const viewport = this.getViewportElement();
    if (viewport) {
      viewport.removeEventListener('scroll', this.scrollHandler);
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
  }
}
