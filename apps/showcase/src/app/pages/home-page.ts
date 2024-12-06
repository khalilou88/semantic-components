import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  template: `
    <div class="relative grow pt-2" id="style-guide-content" hx-swap-oob="true">
      <div class="container relative ml-0">
        <div class="max-w-[720px]">
          <h1 class="mb-2 font-semibold tracking-tight">Tailwind CSS Colors</h1>
          <p class="mb-1 text-muted"></p>
        </div>

        <div class="mt-4">
          <div class="max-w-[720px]">
            <h2 class="font-semibold" id="defaults">Defaults</h2>
          </div>

          <div class="mb-6">
            <div class="w-full overflow-hidden rounded-lg border shadow-sm">
              <div class="mb-0 p-6">
                <div class="text-center">
                  <div class="-mx-2 mb-3 flex flex-row flex-wrap gap-y-2">
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary p-4"></div>
                      <div>primary</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-secondary p-4"></div>
                      <div>secondary</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-neutral mx-2 mb-1 rounded p-4"></div>
                      <div>neutral</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-success mx-2 mb-1 rounded p-4"></div>
                      <div>success</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-info mx-2 mb-1 rounded p-4"></div>
                      <div>info</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-danger mx-2 mb-1 rounded p-4"></div>
                      <div>danger</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-warning p-4"></div>
                      <div>warning</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col max-w-[720px]">
            <h2 class="h5 font-semibold" id="shades">Shades</h2>
          </div>
          <div class="col mb-6">
            <div class="w-full overflow-hidden rounded-lg border shadow-sm">
              <div class="mb-0 p-6">
                <div class="row text-center">
                  <div class="col -mx-2 mb-3 flex flex-row flex-wrap gap-y-2">
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-50 p-4"></div>
                      <div>primary 50</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-100 p-4"></div>
                      <div>primary 100</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-200 p-4"></div>
                      <div>primary 200</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-300 p-4"></div>
                      <div>primary 300</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-400 p-4"></div>
                      <div>primary 400</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-500 p-4"></div>
                      <div>primary 500</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-600 p-4"></div>
                      <div>primary 600</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-700 p-4"></div>
                      <div>primary 700</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-800 p-4"></div>
                      <div>primary 800</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-900 p-4"></div>
                      <div>primary 900</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-primary-950 p-4"></div>
                      <div>primary 950</div>
                    </div>
                  </div>
                  <div class="col -mx-2 mb-3 flex flex-row flex-wrap gap-y-2">
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-50 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 50</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-100 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 100</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-200 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 200</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-300 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 300</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-400 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 400</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-500 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 500</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-600 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 600</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-700 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 700</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-800 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 800</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-900 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 900</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-secondary-950 mx-2 mb-1 rounded p-4"></div>
                      <div>secondary 950</div>
                    </div>
                  </div>
                  <div class="col -mx-2 mb-3 flex flex-row flex-wrap gap-y-2">
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-50 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 50</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-100 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 100</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-200 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 200</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-300 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 300</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-400 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 400</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-500 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 500</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-600 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 600</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-700 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 700</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-800 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 800</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-900 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 900</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="bg-tertiary-950 mx-2 mb-1 rounded p-4"></div>
                      <div>tertiary 950</div>
                    </div>
                  </div>
                  <div class="col -mx-2 mb-3 flex flex-row flex-wrap gap-y-2">
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-50 p-4"></div>
                      <div>neutral 50</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-100 p-4"></div>
                      <div>neutral 100</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-200 p-4"></div>
                      <div>neutral 200</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-300 p-4"></div>
                      <div>neutral 300</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-400 p-4"></div>
                      <div>neutral 400</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-500 p-4"></div>
                      <div>neutral 500</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-600 p-4"></div>
                      <div>neutral 600</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-700 p-4"></div>
                      <div>neutral 700</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-800 p-4"></div>
                      <div>neutral 800</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-900 p-4"></div>
                      <div>neutral 900</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-neutral-950 p-4"></div>
                      <div>neutral 950</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col max-w-[720px]">
            <h2 class="h5 font-semibold" id="black/white">Black/White</h2>
          </div>
          <div class="col mb-6">
            <div class="w-full overflow-hidden rounded-lg border shadow-sm">
              <div class="mb-0 p-6">
                <div class="row text-center">
                  <div class="col -mx-2 mb-3 flex flex-row flex-wrap gap-y-2">
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded bg-black p-4"></div>
                      <div>black</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div class="mx-2 mb-1 rounded border border-black bg-white p-4"></div>
                      <div>white</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col max-w-[720px]">
            <h2 class="h5 font-semibold" id="gradients">Gradients</h2>
          </div>
          <div class="col mb-6">
            <div class="w-full overflow-hidden rounded-lg border shadow-sm">
              <div class="mb-0 p-6">
                <div class="row text-center">
                  <div class="col -mx-2 mb-3 flex flex-row flex-wrap gap-y-2">
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div
                        class="mx-2 mb-1 rounded bg-gradient-to-br from-primary to-secondary p-4"
                      ></div>
                      <div>Primary to Secondary</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div
                        class="to-tertiary mx-2 mb-1 rounded bg-gradient-to-br from-primary p-4"
                      ></div>
                      <div>Primary to Tertiary</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div
                        class="to-tertiary mx-2 mb-1 rounded bg-gradient-to-br from-secondary p-4"
                      ></div>
                      <div>Secondary to Tertiary</div>
                    </div>
                    <div class="w-[30%] text-xs md:w-1/5 lg:w-[9%]">
                      <div
                        class="mx-2 mb-1 rounded bg-gradient-to-br from-primary-50 to-primary-200 p-4"
                      ></div>
                      <div>Primary 50 to Primary 200</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
