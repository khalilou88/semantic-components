import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScFileUpload } from '@semantic-components/ui';

@Component({
  selector: 'app-file-upload-page',
  imports: [ScFileUpload],
  template: `
    <div class="m-10">
      <sc-file-upload />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FileUploadPage {}
