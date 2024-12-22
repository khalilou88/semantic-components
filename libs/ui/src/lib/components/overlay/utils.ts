import { signal } from '@angular/core';

export const scOverlayClasses = signal<string[]>([
  'bg-black/80',
  'data-[state=open]:animate-in',
  'data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0',
  'data-[state=open]:fade-in-0',
]);
