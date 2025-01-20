import { ChangeDetectionStrategy, Component, ViewEncapsulation, input } from '@angular/core';

interface ScCommentModel {
  id: number;
  author: string;
  text: string;
  children?: ScCommentModel[];
}

@Component({
  selector: 'sc-comment',
  imports: [],
  template: `
    <div class="comment">
      <div class="comment-content">
        <strong>{{ comment().author }}</strong>
        : {{ comment().text }}
      </div>

      <div class="comment-children">
        @for (child of comment().children; track child.id) {
          <sc-comment [comment]="child" />
        }
      </div>
    </div>
  `,
  styles: `
    .comment {
      margin: 10px 0;
      padding-left: 20px;
      border-left: 2px solid #ccc;
    }
    .comment-content {
      margin-bottom: 5px;
    }
    .comment-children {
      margin-top: 10px;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScComment {
  comment = input.required<ScCommentModel>();
}
