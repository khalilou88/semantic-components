import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  signal,
} from '@angular/core';

@Component({
  selector: 'sc-scroll-bar',
  imports: [CommonModule],
  template: `
    <div
      class="absolute"
      #scrollbar
      [ngClass]="[
        'flex touch-none select-none transition-colors',
        orientation === 'vertical'
          ? 'h-full w-2.5 border-l border-l-transparent p-[1px]'
          : 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      ]"
      [class.right-0]="orientation === 'vertical'"
      [class.bottom-0]="orientation === 'horizontal'"
      [class.invisible]="!isVisible()"
    >
      <div class="relative flex-1 rounded-full bg-border" #thumb></div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollBar implements AfterViewInit, OnDestroy {
  @Input() orientation: 'vertical' | 'horizontal' = 'vertical';
  @Input() viewportEl!: ElementRef<HTMLDivElement> | HTMLDivElement;
  @ViewChild('scrollbar') scrollbarEl!: ElementRef<HTMLDivElement>;
  @ViewChild('thumb') thumbEl!: ElementRef<HTMLDivElement>;

  isVisible = signal(false);
  private resizeObserver?: ResizeObserver;
  private scrollListener?: () => void;
  private pointerDownListener?: (e: PointerEvent) => void;
  private dragListener?: (e: PointerEvent) => void;
  private dragEndListener?: () => void;
  private isDragging = false;
  private startPos = 0;
  private startThumbPos = 0;

  ngAfterViewInit() {
    this.setupScrollTracking();
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private setupScrollTracking() {
    const viewport =
      this.viewportEl instanceof ElementRef ? this.viewportEl.nativeElement : this.viewportEl;

    if (!viewport) return;

    // Update thumb size and position on viewport resize
    this.resizeObserver = new ResizeObserver(() => {
      this.updateThumb();
    });
    this.resizeObserver.observe(viewport);

    // Update thumb position on scroll
    this.scrollListener = () => {
      this.updateThumb();
    };
    viewport.addEventListener('scroll', this.scrollListener);

    // Setup drag handling
    const thumb = this.thumbEl.nativeElement;
    this.pointerDownListener = (e: PointerEvent) => {
      e.preventDefault();
      this.startDrag(e);
    };
    thumb.addEventListener('pointerdown', this.pointerDownListener);

    // Initial update
    setTimeout(() => this.updateThumb(), 0);
  }

  private updateThumb() {
    const viewport =
      this.viewportEl instanceof ElementRef ? this.viewportEl.nativeElement : this.viewportEl;
    const thumb = this.thumbEl.nativeElement;

    if (!viewport || !thumb) return;

    if (this.orientation === 'vertical') {
      const viewportHeight = viewport.clientHeight;
      const contentHeight = viewport.scrollHeight;

      if (contentHeight <= viewportHeight) {
        this.isVisible.set(false);
        return;
      }

      this.isVisible.set(true);
      const thumbHeight = Math.max(20, (viewportHeight / contentHeight) * viewportHeight);
      thumb.style.height = `${thumbHeight}px`;

      const scrollPercentage = viewport.scrollTop / (contentHeight - viewportHeight);
      const thumbPosition = scrollPercentage * (viewportHeight - thumbHeight);
      thumb.style.transform = `translateY(${thumbPosition}px)`;
    } else {
      const viewportWidth = viewport.clientWidth;
      const contentWidth = viewport.scrollWidth;

      if (contentWidth <= viewportWidth) {
        this.isVisible.set(false);
        return;
      }

      this.isVisible.set(true);
      const thumbWidth = Math.max(20, (viewportWidth / contentWidth) * viewportWidth);
      thumb.style.width = `${thumbWidth}px`;

      const scrollPercentage = viewport.scrollLeft / (contentWidth - viewportWidth);
      const thumbPosition = scrollPercentage * (viewportWidth - thumbWidth);
      thumb.style.transform = `translateX(${thumbPosition}px)`;
    }
  }

  private startDrag(e: PointerEvent) {
    const thumb = this.thumbEl.nativeElement;

    this.isDragging = true;
    this.startPos = this.orientation === 'vertical' ? e.clientY : e.clientX;
    this.startThumbPos = parseInt(thumb.style.transform.replace(/[^0-9-]/g, '') || '0');

    document.body.style.userSelect = 'none';

    this.dragListener = (e: PointerEvent) => {
      if (!this.isDragging) return;
      this.drag(e);
    };
    document.addEventListener('pointermove', this.dragListener);

    this.dragEndListener = () => {
      this.stopDrag();
    };
    document.addEventListener('pointerup', this.dragEndListener);
    document.addEventListener('pointercancel', this.dragEndListener);
  }

  private drag(e: PointerEvent) {
    if (!this.isDragging) return;

    const viewport =
      this.viewportEl instanceof ElementRef ? this.viewportEl.nativeElement : this.viewportEl;
    const thumb = this.thumbEl.nativeElement;

    if (!viewport || !thumb) return;

    e.preventDefault();

    const currentPos = this.orientation === 'vertical' ? e.clientY : e.clientX;
    const deltaPx = currentPos - this.startPos;

    if (this.orientation === 'vertical') {
      const viewportHeight = viewport.clientHeight;
      const contentHeight = viewport.scrollHeight;
      const thumbHeight = parseInt(thumb.style.height);

      const maxScroll = viewportHeight - thumbHeight;
      const newThumbPos = Math.max(0, Math.min(maxScroll, this.startThumbPos + deltaPx));

      thumb.style.transform = `translateY(${newThumbPos}px)`;

      const scrollPercentage = newThumbPos / maxScroll;
      viewport.scrollTop = scrollPercentage * (contentHeight - viewportHeight);
    } else {
      const viewportWidth = viewport.clientWidth;
      const contentWidth = viewport.scrollWidth;
      const thumbWidth = parseInt(thumb.style.width);

      const maxScroll = viewportWidth - thumbWidth;
      const newThumbPos = Math.max(0, Math.min(maxScroll, this.startThumbPos + deltaPx));

      thumb.style.transform = `translateX(${newThumbPos}px)`;

      const scrollPercentage = newThumbPos / maxScroll;
      viewport.scrollLeft = scrollPercentage * (contentWidth - viewportWidth);
    }
  }

  private stopDrag() {
    this.isDragging = false;
    document.body.style.userSelect = '';

    if (this.dragListener) {
      document.removeEventListener('pointermove', this.dragListener);
    }

    if (this.dragEndListener) {
      document.removeEventListener('pointerup', this.dragEndListener);
      document.removeEventListener('pointercancel', this.dragEndListener);
    }
  }

  private cleanup() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    const viewport =
      this.viewportEl instanceof ElementRef ? this.viewportEl.nativeElement : this.viewportEl;
    if (viewport && this.scrollListener) {
      viewport.removeEventListener('scroll', this.scrollListener);
    }

    const thumb = this.thumbEl?.nativeElement;
    if (thumb && this.pointerDownListener) {
      thumb.removeEventListener('pointerdown', this.pointerDownListener);
    }

    this.stopDrag();
  }
}
