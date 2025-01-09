import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ScCheckboxGroup, ScCheckboxItem } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-group-page',
  imports: [ScCheckboxGroup, ScCheckboxItem, ReactiveFormsModule, JsonPipe],
  template: `
    <form [formGroup]="toppingsForm">
      <sc-checkbox-group formControlName="toppings">
        @for (topping of toppingsArray; track topping) {
          <sc-checkbox-item [label]="topping" [value]="topping" />
        }
      </sc-checkbox-group>
    </form>

    <br />
    <br />
    <br />
    {{ toppingsForm.value | json }}

    <br />
    <br />
    <br />

    <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
      <form class="space-y-8">
        <div class="space-y-2">
          <div class="mb-4">
            <label
              class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
              for=":rcc:-form-item"
            >
              Sidebar
            </label>
            <p class="text-sm text-muted-foreground" id=":rcc:-form-item-description">
              Select the items you want to display in the sidebar.
            </p>
          </div>
          <div class="flex flex-row items-start space-x-3 space-y-0">
            <button
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id=":rcd:-form-item"
              type="button"
              role="checkbox"
              aria-checked="true"
              data-state="checked"
              value="on"
              aria-describedby=":rcd:-form-item-description"
              aria-invalid="false"
            >
              <span
                class="flex items-center justify-center text-current"
                data-state="checked"
                style="pointer-events: none;"
              >
                <svg
                  class="lucide lucide-check h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
            </button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              checked=""
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
            />
            <label
              class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
              for=":rcd:-form-item"
            >
              Recents
            </label>
          </div>
          <div class="flex flex-row items-start space-x-3 space-y-0">
            <button
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id=":rce:-form-item"
              type="button"
              role="checkbox"
              aria-checked="true"
              data-state="checked"
              value="on"
              aria-describedby=":rce:-form-item-description"
              aria-invalid="false"
            >
              <span
                class="flex items-center justify-center text-current"
                data-state="checked"
                style="pointer-events: none;"
              >
                <svg
                  class="lucide lucide-check h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
            </button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              checked=""
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
            />
            <label
              class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
              for=":rce:-form-item"
            >
              Home
            </label>
          </div>
          <div class="flex flex-row items-start space-x-3 space-y-0">
            <button
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id=":rcf:-form-item"
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              aria-describedby=":rcf:-form-item-description"
              aria-invalid="false"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
            />
            <label
              class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
              for=":rcf:-form-item"
            >
              Applications
            </label>
          </div>
          <div class="flex flex-row items-start space-x-3 space-y-0">
            <button
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id=":rcg:-form-item"
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              aria-describedby=":rcg:-form-item-description"
              aria-invalid="false"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
            />
            <label
              class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
              for=":rcg:-form-item"
            >
              Desktop
            </label>
          </div>
          <div class="flex flex-row items-start space-x-3 space-y-0">
            <button
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id=":rch:-form-item"
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              aria-describedby=":rch:-form-item-description"
              aria-invalid="false"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
            />
            <label
              class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
              for=":rch:-form-item"
            >
              Downloads
            </label>
          </div>
          <div class="flex flex-row items-start space-x-3 space-y-0">
            <button
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id=":rci:-form-item"
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              aria-describedby=":rci:-form-item-description"
              aria-invalid="false"
            ></button>
            <input
              aria-hidden="true"
              tabindex="-1"
              type="checkbox"
              value="on"
              style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 16px; height: 16px;"
            />
            <label
              class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-normal"
              for=":rci:-form-item"
            >
              Documents
            </label>
          </div>
        </div>
        <button
          class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxGroupPage {
  toppingsArray = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];

  toppingsForm = new FormGroup({
    toppings: new FormControl([]),
  });
}
