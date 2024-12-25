import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScFileUpload, ScFileUploader } from '@semantic-components/ui';

@Component({
  selector: 'app-file-upload-page',
  imports: [ScFileUpload, ScFileUploader],
  template: `
    <div class="m-10">
      <sc-file-upload />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <sc-file-uploader />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FileUploadPage {}
