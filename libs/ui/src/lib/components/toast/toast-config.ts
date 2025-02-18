import { InjectionToken } from '@angular/core';

export interface ToastConfig {
  position: {
    top: number;
    right: number;
  };
}

export const defaultToastConfig: ToastConfig = {
  position: {
    top: 20,
    right: 20,
  },
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');
