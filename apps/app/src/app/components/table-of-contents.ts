import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';

import { TocItem, TocService } from './toc/toc.service';

@Component({
  selector: 'app-table-of-contents',
  imports: [CommonModule],
  template: `
    <div class="mb-4">
      <h4 class="text-sm font-medium">On This Page</h4>
      <ul class="mt-2 space-y-2 text-sm">
        <ng-container
          *ngTemplateOutlet="tocTemplate; context: { items: tocItems$ | async, level: 1 }"
        ></ng-container>
      </ul>
    </div>

    <ng-template #tocTemplate let-items="items" let-level="level">
      <ng-container *ngFor="let item of items">
        <li>
          <a
            class="text-muted-foreground hover:text-foreground"
            (click)="scrollToHeading(item.id)"
            href="javascript:void(0)"
          >
            {{ item.text }}
          </a>
          <ul class="mt-2 space-y-2 text-sm" *ngIf="item.children.length > 0">
            <ng-container
              *ngTemplateOutlet="tocTemplate; context: { items: item.children, level: level + 1 }"
            ></ng-container>
          </ul>
        </li>
      </ng-container>
    </ng-template>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContents {
  tocItems$: Observable<TocItem[]>;

  constructor(private readonly tocService: TocService) {
    this.tocItems$ = this.tocService.tocItems$;
  }

  scrollToHeading(id: string): void {
    this.tocService.scrollToHeading(id);
  }
}
