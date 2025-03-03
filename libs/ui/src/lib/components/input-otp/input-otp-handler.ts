import { Injectable, signal } from '@angular/core';

@Injectable()
export class InputOtpHandler {
  inputIndex = signal<number>(-1);
  length = signal<number>(0);
}
