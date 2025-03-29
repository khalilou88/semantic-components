import { Injectable, signal } from '@angular/core';

@Injectable()
export class AvatarState {
  readonly state = signal<'loading' | 'loaded' | 'error'>('loading');
}
