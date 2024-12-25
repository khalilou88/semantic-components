import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScFileUpload, ScFileUploader, ScSimpleDndUploadFiles } from '@semantic-components/ui';

@Component({
  selector: 'app-file-upload-page',
  imports: [ScFileUpload, ScFileUploader, ScSimpleDndUploadFiles],
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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <sc-simple-dnd-upload-files />
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FileUploadPage {}
