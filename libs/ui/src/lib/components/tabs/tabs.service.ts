import { Injectable, linkedSignal, signal } from '@angular/core';

import { ScTab } from './tab';

@Injectable()
export class ScTabsService {
  readonly focusTabId = signal<string>('');

  readonly activeTabId = linkedSignal(() => this.focusTabId());

  readonly tabs = signal<readonly ScTab[]>([]);
}
