import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';

import { ScTooltip } from '../../tooltip';
import { ScEditor } from '../editor';
import { ExtensionsService } from '../extensions.service';
import { AddVideoDialogComponent, VideoData } from './add-video-dialog.component';

@Component({
  selector: 'sc-youtube-action',
  imports: [ScTooltip, DialogModule],
  template: `
    <button
      class="cursor-pointer rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
      (click)="openDialog()"
      type="button"
      scTooltip="Add video"
    >
      <svg
        class="size-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="sr-only">Add video</span>
    </button>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YoutubeActionComponent {
  private readonly parent = inject(ScEditor, { host: true });
  dialog = inject(Dialog);

  extensionsService = inject(ExtensionsService);

  constructor() {
    this.extensionsService.youtube.set(true);
  }

  get editor() {
    return this.parent.editor;
  }

  setYoutubeVideo(video: VideoData | undefined) {
    if (video?.url) {
      this.editor.commands.setYoutubeVideo({
        src: video.url,
        width: video.width ? video.width : 640,
        height: video.height ? video.height : 480,
      });
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open<VideoData>(AddVideoDialogComponent, {
      minWidth: '600px',
    });

    dialogRef.closed.subscribe((result) => {
      this.setYoutubeVideo(result);
    });
  }
}
