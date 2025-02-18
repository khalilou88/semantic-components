// toast.model.ts
import { InjectionToken } from '@angular/core';

export interface ToastData {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export const TOAST_DATA = new InjectionToken<ToastData>('TOAST_DATA');
