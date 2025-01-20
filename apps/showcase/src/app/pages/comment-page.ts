import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScComment } from '@semantic-components/ui';

@Component({
  selector: 'app-comment-page',
  imports: [ScComment],
  template: `
    <sc-comment />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommentPage {}
