import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  contentChildren,
} from '@angular/core';

import { ScTabContent2 } from './tab-content';
import { ScTabLabel2 } from './tab-label';

@Component({
  selector: 'sc-tab-group',
  imports: [NgTemplateOutlet],
  template: `
    <div class="group relative my-4 flex flex-col space-y-2">
      <div class="relative mr-auto w-full" dir="ltr" data-orientation="horizontal">
        <div class="flex items-center justify-between pb-3">
          <div
            class="inline-flex h-9 w-full items-center justify-start rounded-none border-b bg-transparent p-0 text-muted-foreground"
            style="outline: none;"
            tabindex="0"
            data-orientation="horizontal"
          >
            @for (tab of tabLabels(); track tab) {
              <ng-container [ngTemplateOutlet]="tab.template()"></ng-container>
            }
          </div>
        </div>
        <div
          class="relative mt-2 rounded-md border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          id="radix-:r17g:-content-preview"
          style="animation-duration: 0s;"
          tabindex="0"
          data-state="active"
          data-orientation="horizontal"
        >
          <div class="theme-zinc w-full" style="--radius: 0.5rem;">
            <div class="preview flex min-h-[350px] w-full items-center justify-center p-10">
              <div
                class="relative h-72 w-48 overflow-hidden rounded-md border"
                dir="ltr"
                style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
              >
                <div
                  class="size-full rounded-[inherit]"
                  style="overflow: hidden scroll;"
                  data-radix-scroll-area-viewport=""
                >
                  @for (content of tabContents(); track content) {
                    <ng-container [ngTemplateOutlet]="content.template()"></ng-container>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ng-content />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTabGroup implements AfterViewInit {
  readonly tabLabels = contentChildren(ScTabLabel2, { descendants: true });

  readonly tabContents = contentChildren(ScTabContent2, { descendants: true });

  ngAfterViewInit() {
    console.log(this.tabLabels());
  }
}
