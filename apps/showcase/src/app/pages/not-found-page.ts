import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  imports: [],
  template: `
    <!--
  This example requires updating your template:

  <html class="h-full">
  <body class="h-full">

-->
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">404</p>
        <h1
          class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
        >
          Page not found
        </h1>
        <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href="#"
          >
            Go back home
          </a>
          <a class="text-sm font-semibold text-gray-900" href="#">
            Contact support
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundPage {}
