import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  imports: [],
  template: `
    <div class="mb-4">
      <h4 class="text-sm font-medium">On This Page</h4>
      <ul class="mt-2 space-y-2 text-sm">
        <li>
          <a class="text-muted-foreground hover:text-foreground" href="#">Introduction</a>
        </li>
        <li>
          <a class="text-muted-foreground hover:text-foreground" href="#">Key Features</a>
        </li>
        <li>
          <a class="text-muted-foreground hover:text-foreground" href="#">Installation</a>
        </li>
        <li>
          <a class="text-muted-foreground hover:text-foreground" href="#">Usage</a>
        </li>
        <li>
          <a class="text-muted-foreground hover:text-foreground" href="#">Component Preview</a>
        </li>
      </ul>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableOfContents {}
