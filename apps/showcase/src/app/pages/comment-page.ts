import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ScCommentModel, ScComments } from '@semantic-components/ui';

@Component({
  selector: 'app-comment-page',
  imports: [ScComments],
  template: `
    <sc-comments [currentUser]="currentUser" [comments]="comments" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommentPage implements OnInit {
  currentUser = {
    id: 1,
    name: 'Current User',
    avatar: 'https://gravatar.com/avatar/760d491a74b67e88540d7066f5ff59c5?s=400&d=robohash&r=x',
  };

  comments: ScCommentModel[] = [];

  ngOnInit() {
    // Mock data - replace with your actual data fetching logic
    this.comments = [
      {
        id: 1,
        author: 'John Doe',
        avatar: 'https://gravatar.com/avatar/760d491a74b67e88540d7066f5ff59c5?s=400&d=robohash&r=x',
        content: 'This is a great post! Thanks for sharing.',
        timestamp: new Date(),
        likes: 5,
        replies: [
          {
            id: 2,
            author: 'Jane Smith',
            avatar:
              'https://gravatar.com/avatar/760d491a74b67e88540d7066f5ff59c5?s=400&d=robohash&r=x',
            content: 'Completely agree with you!',
            timestamp: new Date(),
            likes: 2,
            replies: [],
          },
        ],
      },
    ];
  }
}
