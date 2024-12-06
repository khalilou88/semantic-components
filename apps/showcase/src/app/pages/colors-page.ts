import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-colors-page',
  imports: [],
  template: `
    <h1>Primitive colors</h1>

    <h1>Primary colors</h1>

    <h2>Light mode</h2>

    <div class="flex">
      <div class="m-5">
        <div class="border mx-2 mb-1 rounded bg-primary p-4"></div>
        <div>Default</div>
      </div>

      <div class="m-5">
        <div class="border mx-2 mb-1 rounded bg-primary-foreground p-4"></div>
        <div>Foreground</div>
      </div>
    </div>

    <h2>Dark mode</h2>

    <div class="dark flex">
      <div class="m-5">
        <div class="border mx-2 mb-1 rounded bg-primary p-4"></div>
        <div>Default</div>
      </div>

      <div class="m-5">
        <div class="border mx-2 mb-1 rounded bg-primary-foreground p-4"></div>
        <div>Foreground</div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ColorsPage {}
