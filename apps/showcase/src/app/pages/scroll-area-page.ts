import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { takeUntil } from 'rxjs/operators';

import { Subject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-scroll-area-page',
  imports: [CommonModule],
  template: `
    <div class="h-[8.5rem] w-96 max-w-[calc(100vw-8rem)] relative">
      <div
        class="h-full overscroll-contain rounded-md outline outline-1 -outline-offset-1 outline-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-800 overflow-auto"
        #viewport
      >
        <div class="flex flex-col gap-4 py-3 pr-6 pl-4 text-sm leading-[1.375rem] text-gray-900">
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
      <div
        class="m-2 flex w-1 justify-center rounded bg-gray-200 opacity-0 transition-opacity delay-300 absolute right-0 top-0 bottom-0"
        #scrollbar
        [ngClass]="{
          'opacity-100 delay-0 duration-75': isScrolling || isHovering,
        }"
      >
        <div class="w-full rounded bg-gray-500 absolute" #thumb></div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScrollAreaPage implements AfterViewInit, OnDestroy {
  @ViewChild('viewport') viewportRef!: ElementRef;
  @ViewChild('scrollbar') scrollbarRef!: ElementRef;
  @ViewChild('thumb') thumbRef!: ElementRef;

  isScrolling = false;
  isHovering = false;

  private readonly destroy$ = new Subject<void>();
  private scrollTimeout: any;

  ngAfterViewInit() {
    const viewport = this.viewportRef.nativeElement;
    const scrollbar = this.scrollbarRef.nativeElement;
    const thumb = this.thumbRef.nativeElement;

    // Update thumb size and position on scroll
    fromEvent(viewport, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.updateThumbPosition();
        this.isScrolling = true;

        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          this.isScrolling = false;
        }, 300);
      });

    // Handle hover state
    fromEvent(scrollbar, 'mouseenter')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.isHovering = true;
      });

    fromEvent(scrollbar, 'mouseleave')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.isHovering = false;
      });

    // Initial thumb setup
    this.updateThumbPosition();
  }

  updateThumbPosition() {
    const viewport = this.viewportRef.nativeElement;
    const thumb = this.thumbRef.nativeElement;

    const scrollPercentage = viewport.scrollTop / (viewport.scrollHeight - viewport.clientHeight);
    const thumbHeight = (viewport.clientHeight / viewport.scrollHeight) * viewport.clientHeight;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.top = `${scrollPercentage * (viewport.clientHeight - thumbHeight)}px`;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
