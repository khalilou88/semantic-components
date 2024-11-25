import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';

import { HeroIcon, IconCardComponent } from '../components/icon-card.component';

@Component({
  selector: 'app-icons-page',
  standalone: true,
  imports: [CommonModule, IconCardComponent],
  template: `
    <section class="bg-gray-50 py-8 antialiased md:py-12 dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <!-- Heading & Filters -->
        <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <nav class="flex" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                  <a
                    class="hover:text-primary-600 inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 dark:hover:text-white"
                    href="#"
                  >
                    <svg
                      class="me-2.5 size-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                      />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div class="flex items-center">
                    <svg
                      class="size-5 text-gray-400 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>
                    <a
                      class="hover:text-primary-600 ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                      href="#"
                    >
                      Products
                    </a>
                  </div>
                </li>
                <li aria-current="page">
                  <div class="flex items-center">
                    <svg
                      class="size-5 text-gray-400 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>
                    <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                      Icons
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 class="mt-3 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              Icons
            </h2>
          </div>
          <div class="flex items-center space-x-4">
            <button
              class="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              data-modal-toggle="filterModal"
              data-modal-target="filterModal"
              type="button"
            >
              <svg
                class="-ms-0.5 me-2 size-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
              Filters
              <svg
                class="-me-0.5 ms-2 size-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <button
              class="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 sm:w-auto dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              id="sortDropdownButton1"
              data-dropdown-toggle="dropdownSort1"
              type="button"
            >
              <svg
                class="-ms-0.5 me-2 size-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
                />
              </svg>
              Sort
              <svg
                class="-me-0.5 ms-2 size-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="z-50 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
              id="dropdownSort1"
              data-popper-placement="bottom"
            >
              <ul
                class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                aria-labelledby="sortDropdownButton"
              >
                <li>
                  <a
                    class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    The most popular
                  </a>
                </li>
                <li>
                  <a
                    class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    Newest
                  </a>
                </li>
                <li>
                  <a
                    class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    Increasing price
                  </a>
                </li>
                <li>
                  <a
                    class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    Decreasing price
                  </a>
                </li>
                <li>
                  <a
                    class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    No. reviews
                  </a>
                </li>
                <li>
                  <a
                    class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    href="#"
                  >
                    Discount %
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
          @for (icon of icons(); track $index) {
            <app-icon-card [icon]="icon" />
          }
        </div>
        <div class="w-full text-center">
          <button
            class="hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            type="button"
          >
            Show more
          </button>
        </div>
      </div>
      <!-- Filter modal -->
      <form
        class="h-modal fixed inset-x-0 top-0 z-50 hidden w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
        id="filterModal"
        action="#"
        method="get"
        tabindex="-1"
        aria-hidden="true"
      >
        <div class="relative size-full max-w-xl md:h-auto">
          <!-- Modal content -->
          <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
            <!-- Modal header -->
            <div class="flex items-start justify-between rounded-t p-4 md:p-5">
              <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">Filters</h3>
              <button
                class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                type="button"
                data-modal-toggle="filterModal"
              >
                <svg
                  class="size-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="px-4 md:px-5">
              <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  class="-mb-px flex flex-wrap text-center text-sm font-medium"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li class="mr-1" role="presentation">
                    <button
                      class="inline-block pb-2 pr-1"
                      id="brand-tab"
                      data-tabs-target="#brand"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Brand
                    </button>
                  </li>
                  <li class="mr-1" role="presentation">
                    <button
                      class="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                      id="advanced-filers-tab"
                      data-tabs-target="#advanced-filters"
                      type="button"
                      role="tab"
                      aria-controls="advanced-filters"
                      aria-selected="false"
                    >
                      Advanced Filters
                    </button>
                  </li>
                </ul>
              </div>
              <div id="myTabContent">
                <div
                  class="grid grid-cols-2 gap-4 md:grid-cols-3"
                  id="brand"
                  role="tabpanel"
                  aria-labelledby="brand-tab"
                >
                  <div class="space-y-2">
                    <h5 class="text-lg font-medium uppercase text-black dark:text-white">A</h5>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="apple"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="apple"
                      >
                        Apple (56)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="asus"
                        type="checkbox"
                        value=""
                        checked
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="asus"
                      >
                        Asus (97)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="acer"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="acer"
                      >
                        Acer (234)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="allview"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="allview"
                      >
                        Allview (45)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="atari"
                        type="checkbox"
                        value=""
                        checked
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="asus"
                      >
                        Atari (176)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="amd"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="amd"
                      >
                        AMD (49)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="aruba"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="aruba"
                      >
                        Aruba (16)
                      </label>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <h5 class="text-lg font-medium uppercase text-black dark:text-white">B</h5>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="beats"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="beats"
                      >
                        Beats (56)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="bose"
                        type="checkbox"
                        value=""
                        checked
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="bose"
                      >
                        Bose (97)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="benq"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="benq"
                      >
                        BenQ (45)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="bosch"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="bosch"
                      >
                        Bosch (176)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="brother"
                        type="checkbox"
                        value=""
                        checked
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="brother"
                      >
                        Brother (176)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="biostar"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="biostar"
                      >
                        Biostar (49)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="braun"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="braun"
                      >
                        Braun (16)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="blaupunkt"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="blaupunkt"
                      >
                        Blaupunkt (45)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="benq2"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="benq2"
                      >
                        BenQ (23)
                      </label>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <h5 class="text-lg font-medium uppercase text-black dark:text-white">C</h5>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="canon"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="canon"
                      >
                        Canon (49)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="cisco"
                        type="checkbox"
                        value=""
                        checked
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="cisco"
                      >
                        Cisco (97)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="cowon"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="cowon"
                      >
                        Cowon (234)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="clevo"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="clevo"
                      >
                        Clevo (45)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="corsair"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="corsair"
                      >
                        Corsair (15)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="csl"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="csl"
                      >
                        Canon (49)
                      </label>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <h5 class="text-lg font-medium uppercase text-black dark:text-white">D</h5>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="dell"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="dell"
                      >
                        Dell (56)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="dogfish"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="dogfish"
                      >
                        Dogfish (24)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="dyson"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="dyson"
                      >
                        Dyson (234)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="dobe"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="dobe"
                      >
                        Dobe (5)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="digitus"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="digitus"
                      >
                        Digitus (1)
                      </label>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <h5 class="text-lg font-medium uppercase text-black dark:text-white">E</h5>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="emetec"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="emetec"
                      >
                        Emetec (56)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="extreme"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="extreme"
                      >
                        Extreme (10)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="elgato"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="elgato"
                      >
                        Elgato (234)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="emerson"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="emerson"
                      >
                        Emerson (45)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="emi"
                        type="checkbox"
                        value=""
                        checked
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="emi"
                      >
                        EMI (176)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="fugoo"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="fugoo"
                      >
                        Fugoo (49)
                      </label>
                    </div>
                  </div>

                  <div class="space-y-2">
                    <h5 class="text-lg font-medium uppercase text-black dark:text-white">F</h5>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="fujitsu"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="fujitsu"
                      >
                        Fujitsu (97)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="fitbit"
                        type="checkbox"
                        value=""
                        checked
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="fitbit"
                      >
                        Fitbit (56)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="foxconn"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="foxconn"
                      >
                        Foxconn (234)
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        id="floston"
                        type="checkbox"
                        value=""
                      />

                      <label
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        for="floston"
                      >
                        Floston (45)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="space-y-4"
                id="advanced-filters"
                role="tabpanel"
                aria-labelledby="advanced-filters-tab"
              >
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                        for="min-price"
                      >
                        Min Price
                      </label>
                      <input
                        class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                        id="min-price"
                        type="range"
                        min="0"
                        max="7000"
                        value="300"
                        step="1"
                      />
                    </div>

                    <div>
                      <label
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                        for="max-price"
                      >
                        Max Price
                      </label>
                      <input
                        class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                        id="max-price"
                        type="range"
                        min="0"
                        max="7000"
                        value="3500"
                        step="1"
                      />
                    </div>

                    <div class="col-span-2 flex items-center justify-between space-x-2">
                      <input
                        class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        id="min-price-input"
                        type="number"
                        value="300"
                        min="0"
                        max="7000"
                        placeholder=""
                        required
                      />

                      <div class="shrink-0 text-sm font-medium dark:text-gray-300">to</div>

                      <input
                        class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                        id="max-price-input"
                        type="number"
                        value="3500"
                        min="0"
                        max="7000"
                        placeholder=""
                        required
                      />
                    </div>
                  </div>

                  <div class="space-y-3">
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-900 dark:text-white"
                        for="min-delivery-time"
                      >
                        Min Delivery Time (Days)
                      </label>

                      <input
                        class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
                        id="min-delivery-time"
                        type="range"
                        min="3"
                        max="50"
                        value="30"
                        step="1"
                      />
                    </div>

                    <input
                      class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                      id="min-delivery-time-input"
                      type="number"
                      value="30"
                      min="3"
                      max="50"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div>
                  <h6 class="mb-2 text-sm font-medium text-black dark:text-white">Condition</h6>

                  <ul
                    class="flex w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  >
                    <li class="w-full border-r border-gray-200 dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                          id="condition-all"
                          type="radio"
                          value=""
                          name="list-radio"
                          checked
                        />
                        <label
                          class="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="condition-all"
                        >
                          All
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-r border-gray-200 dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                          id="condition-new"
                          type="radio"
                          value=""
                          name="list-radio"
                        />
                        <label
                          class="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="condition-new"
                        >
                          New
                        </label>
                      </div>
                    </li>
                    <li class="w-full">
                      <div class="flex items-center pl-3">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                          id="condition-used"
                          type="radio"
                          value=""
                          name="list-radio"
                        />
                        <label
                          class="ml-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="condition-used"
                        >
                          Used
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div>
                    <h6 class="mb-2 text-sm font-medium text-black dark:text-white">Colour</h6>
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="blue"
                          type="checkbox"
                          value=""
                        />

                        <label
                          class="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="blue"
                        >
                          <div class="bg-primary-600 mr-2 size-3.5 rounded-full"></div>
                          Blue
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="gray"
                          type="checkbox"
                          value=""
                        />

                        <label
                          class="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="gray"
                        >
                          <div class="mr-2 size-3.5 rounded-full bg-gray-400"></div>
                          Gray
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="green"
                          type="checkbox"
                          value=""
                          checked
                        />

                        <label
                          class="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="green"
                        >
                          <div class="mr-2 size-3.5 rounded-full bg-green-400"></div>
                          Green
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="pink"
                          type="checkbox"
                          value=""
                        />

                        <label
                          class="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="pink"
                        >
                          <div class="mr-2 size-3.5 rounded-full bg-pink-400"></div>
                          Pink
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="red"
                          type="checkbox"
                          value=""
                          checked
                        />

                        <label
                          class="ml-2 flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="red"
                        >
                          <div class="mr-2 size-3.5 rounded-full bg-red-500"></div>
                          Red
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 class="mb-2 text-sm font-medium text-black dark:text-white">Rating</h6>
                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="five-stars"
                          type="radio"
                          value=""
                          name="rating"
                        />
                        <label class="ml-2 flex items-center" for="five-stars">
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="four-stars"
                          type="radio"
                          value=""
                          name="rating"
                        />
                        <label class="ml-2 flex items-center" for="four-stars">
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="three-stars"
                          type="radio"
                          value=""
                          name="rating"
                          checked
                        />
                        <label class="ml-2 flex items-center" for="three-stars">
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="two-stars"
                          type="radio"
                          value=""
                          name="rating"
                        />
                        <label class="ml-2 flex items-center" for="two-stars">
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="one-star"
                          type="radio"
                          value=""
                          name="rating"
                        />
                        <label class="ml-2 flex items-center" for="one-star">
                          <svg
                            class="size-5 text-yellow-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>First star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Second star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Third star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fourth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                          <svg
                            class="size-5 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Fifth star</title>
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h6 class="mb-2 text-sm font-medium text-black dark:text-white">Weight</h6>

                    <div class="space-y-2">
                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="under-1-kg"
                          type="checkbox"
                          value=""
                        />

                        <label
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="under-1-kg"
                        >
                          Under 1 kg
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="1-1-5-kg"
                          type="checkbox"
                          value=""
                          checked
                        />

                        <label
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="1-1-5-kg"
                        >
                          1-1,5 kg
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="1-5-2-kg"
                          type="checkbox"
                          value=""
                        />

                        <label
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="1-5-2-kg"
                        >
                          1,5-2 kg
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="2-5-3-kg"
                          type="checkbox"
                          value=""
                        />

                        <label
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="2-5-3-kg"
                        >
                          2,5-3 kg
                        </label>
                      </div>

                      <div class="flex items-center">
                        <input
                          class="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 size-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          id="over-3-kg"
                          type="checkbox"
                          value=""
                        />

                        <label
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          for="over-3-kg"
                        >
                          Over 3 kg
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h6 class="mb-2 text-sm font-medium text-black dark:text-white">Delivery type</h6>

                  <ul class="grid grid-cols-2 gap-4">
                    <li>
                      <input
                        class="peer hidden"
                        id="delivery-usa"
                        type="radio"
                        name="delivery"
                        value="delivery-usa"
                        checked
                      />
                      <label
                        class="peer-checked:border-primary-600 peer-checked:text-primary-600 dark:peer-checked:text-primary-500 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        for="delivery-usa"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">USA</div>
                          <div class="w-full">Delivery only for USA</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        class="peer hidden"
                        id="delivery-europe"
                        type="radio"
                        name="delivery"
                        value="delivery-europe"
                      />
                      <label
                        class="peer-checked:border-primary-600 peer-checked:text-primary-600 dark:peer-checked:text-primary-500 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        for="delivery-europe"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">Europe</div>
                          <div class="w-full">Delivery only for USA</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        class="peer hidden"
                        id="delivery-asia"
                        type="radio"
                        name="delivery"
                        value="delivery-asia"
                        checked
                      />
                      <label
                        class="peer-checked:border-primary-600 peer-checked:text-primary-600 dark:peer-checked:text-primary-500 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        for="delivery-asia"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">Asia</div>
                          <div class="w-full">Delivery only for Asia</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        class="peer hidden"
                        id="delivery-australia"
                        type="radio"
                        name="delivery"
                        value="delivery-australia"
                      />
                      <label
                        class="peer-checked:border-primary-600 peer-checked:text-primary-600 dark:peer-checked:text-primary-500 inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 md:p-5 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        for="delivery-australia"
                      >
                        <div class="block">
                          <div class="w-full text-lg font-semibold">Australia</div>
                          <div class="w-full">Delivery only for Australia</div>
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Modal footer -->
            <div class="flex items-center space-x-4 rounded-b p-4 md:p-5 dark:border-gray-600">
              <button
                class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                type="submit"
              >
                Show 50 results
              </button>
              <button
                class="hover:text-primary-700 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                type="reset"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsPageComponent implements OnInit {
  icons = signal<HeroIcon[]>([]);

  url = 'heroicons.json';

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.get<HeroIcon[]>(this.url).subscribe((icons) => {
      this.icons.set(icons);
    });
  }
}
