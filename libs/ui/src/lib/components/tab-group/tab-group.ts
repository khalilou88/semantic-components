import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  contentChildren,
} from '@angular/core';

import { LabelDirective } from './label.directive';
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

            <button
              class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
              id="radix-:r17g:-trigger-preview"
              tabindex="-1"
              type="button"
              data-state="active"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Preview
            </button>

            <button
              class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold text-muted-foreground shadow-none ring-offset-background transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-primary data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-none"
              id="radix-:r17g:-trigger-code"
              tabindex="-1"
              type="button"
              data-state="inactive"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Code
            </button>
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
                  <div style="min-width: 100%; display: table;">
                    <div class="p-4">
                      <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
                      <div class="text-sm">v1.2.0-beta.50</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.49</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.48</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.47</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.46</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.45</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.44</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.43</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.42</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.41</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.40</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.39</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.38</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.37</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.36</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.35</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.34</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.33</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.32</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.31</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.30</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.29</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.28</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.27</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.26</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.25</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.24</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.23</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.22</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.21</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.20</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.19</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.18</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.17</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.16</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.15</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.14</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.13</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.12</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.11</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.10</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.9</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.8</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.7</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.6</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.5</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.4</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.3</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.2</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                      <div class="text-sm">v1.2.0-beta.1</div>
                      <div
                        class="my-2 h-px w-full shrink-0 bg-border"
                        data-orientation="horizontal"
                      >
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          id="radix-:r17g:-content-code"
          tabindex="0"
          hidden=""
          data-state="inactive"
          data-orientation="horizontal"
        >
          &nbsp;
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

  ngAfterViewInit() {
    console.log(this.tabLabels());
  }
}
