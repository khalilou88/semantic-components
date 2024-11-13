import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from '@semantic-components/ui';

@Component({
  selector: 'app-editor-page',
  standalone: true,
  imports: [CommonModule, EditorComponent],
  template: `
    <p>editor-page works!</p>

    <lib-editor />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorPageComponent {}
