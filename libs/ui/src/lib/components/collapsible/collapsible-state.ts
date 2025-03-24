import { Injectable, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class ScCollapsibleState implements OnDestroy {
  readonly isToggled = new Subject<void>();

  ngOnDestroy(): void {
    this.isToggled.complete();
  }
}
