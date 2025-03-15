import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScFileUpload } from '@semantic-components/ui';

@Component({
  selector: 'app-file-upload-page',
  imports: [ScFileUpload],
  template: `
    <div class="m-10">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-2xl font-bold mb-6">File Upload Example</h1>

        <div class="max-w-lg">
          <sc-file-upload
            [maxFileSize]="10"
            [multiple]="true"
            (uploadComplete)="onUploadComplete($event)"
            acceptedFileTypes=".jpg,.jpeg,.png,.pdf,.docx"
            uploadUrl="/api/upload"
          ></sc-file-upload>
        </div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FileUploadPage {
  onUploadComplete(response: any): void {
    console.log('Upload complete!', response);
    // Handle the server response here
  }
}
