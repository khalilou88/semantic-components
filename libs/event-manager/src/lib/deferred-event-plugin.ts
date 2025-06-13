import { DOCUMENT, Injectable, inject } from '@angular/core';
import { EventManagerPlugin } from '@angular/platform-browser';

import { debounceTime, fromEvent, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeferredEventPlugin extends EventManagerPlugin {
  constructor() {
    super(inject(DOCUMENT));
  }

  supports(eventName: string): boolean {
    return /debounce|throttle/.test(eventName);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  addEventListener(element: HTMLElement, eventName: string, originalHandler: Function): Function {
    const [name, method, duration = 300] = eventName.split('.');

    // Create an observable for the event
    const event$ = fromEvent(element, name);

    // Apply debounce or throttle based on the prefix
    const processedEvent$ =
      method === 'debounce'
        ? event$.pipe(debounceTime(+duration))
        : event$.pipe(throttleTime(+duration));

    // Subscribe to the processed observable and invoke the handler
    const subscription = processedEvent$.subscribe((event) => originalHandler(event));

    // Return a function to clean up the subscription
    return () => subscription.unsubscribe();
  }
}
