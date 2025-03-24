import { Injectable, signal } from '@angular/core';

@Injectable()
export class ScCollapsibleState {
  readonly open = signal(false);
}
