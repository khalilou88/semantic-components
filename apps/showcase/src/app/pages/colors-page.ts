import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-colors-page',
  imports: [],
  template: `
    <h1>Primitive colors</h1>

    <h1>Primary colors</h1>

    <div class="bg-background">
      <h2 class="text-primary">Light mode</h2>
      <p class="bg-primary text-primary-foreground p-4">Primary Button</p>
    </div>

    <br />
    <br />

    <div class="dark bg-background">
      <h2 class="text-primary">Dark mode</h2>
      <p class="bg-primary text-primary-foreground p-4">Primary Button</p>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ColorsPage {}
