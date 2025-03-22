import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';

import { TocItem, TocService } from './toc/toc.service';

@Component({
  selector: 'app-table-of-contents',
  imports: [CommonModule, JsonPipe],
  template: `
    <div class="mb-4">
      <h4 class="text-sm font-medium">On This Page</h4>
      <ul class="mt-2 space-y-2 text-sm">
        @for (item of tocItems$ | async; track $index) {
          <li [style.padding-left.px]="(item.level - minLevel) * indentation">
            <a
              class="text-muted-foreground hover:text-foreground"
              [class.underline]="item.isActive"
              (click)="scrollTo(item.id)"
              href="javascript:void(0)"
            >
              {{ item.text }}
            </a>
          </li>
        }
      </ul>
    </div>

    {{ tocItems$ | async | json }}
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContents {
  @Input() title: string = 'Table of Contents';
  @Input() indentation: number = 12; // Pixels to indent each level

  tocItems$: Observable<TocItem[]>;
  minLevel: number = 1;

  constructor(private readonly tocService: TocService) {
    this.tocItems$ = this.tocService.tocItems;
  }

  ngOnInit(): void {
    // Calculate the minimum heading level to properly indent items
    this.tocService.tocItems.subscribe((items) => {
      if (items.length > 0) {
        this.minLevel = Math.min(...items.map((item) => item.level));
      }
    });
  }

  scrollTo(id: string): void {
    this.tocService.scrollToHeading(id);
  }
}
