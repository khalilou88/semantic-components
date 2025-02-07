import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, InjectionToken, PLATFORM_ID, inject } from '@angular/core';

function mockLocalStorage(): Storage {
  return {
    length: 0,
    key: () => null,
    getItem: () => null,
    setItem: () => null,
    removeItem: () => null,
    clear: () => null,
  };
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken<Storage>('LOCAL_STORAGE_TOKEN', {
  factory: () => {
    const platformId = inject(PLATFORM_ID);
    const isBrowser = isPlatformBrowser(platformId);
    const document = inject(DOCUMENT);

    if (isBrowser) {
      return document.defaultView?.localStorage ?? mockLocalStorage();
    } else {
      return mockLocalStorage();
    }
  },
});

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  private readonly storage = inject(LOCAL_STORAGE_TOKEN);

  get length() {
    return this.storage.length;
  }

  clear() {
    this.storage.clear();
  }

  getItem(key: string) {
    return this.storage.getItem(key);
  }

  key(index: number) {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}
