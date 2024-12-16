import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ScLabel, ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-radio-group-page',
  imports: [ScRadioGroup, ScRadioGroupItem, ScLabel],
  template: `
    <div class="flex gap-2 items-start">
      <div class="grid place-items-center mt-1">
        <input
          class="peer col-start-1 row-start-1  appearance-none shrink-0  w-4 h-4 border-2 border-blue-500 rounded-full  focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-400  disabled:border-gray-400  "
          type="radio"
        />

        <div
          class="pointer-events-none col-start-1 row-start-1 w-2 h-2 rounded-full peer-checked:bg-blue-500 peer-checked:peer-disabled:bg-gray-400"
        ></div>

        <label class="text-start hover:cursor-pointer">label</label>
      </div>
    </div>

    <br />
    <br />
    <br />

    <div sc-radio-group>
      <sc-radio-group-item />
    </div>

    <h1>Radios</h1>

    <div>
      <div class="form-check">
        <input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
        <label class="form-check-label" sc-label for="flexRadioDefault1">Default radio</label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          id="flexRadioDefault2"
          type="radio"
          name="flexRadioDefault"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2">Default checked radio</label>
      </div>
    </div>

    <h1>Disabled</h1>
    <div class="form-check">
      <input
        class="form-check-input"
        id="flexRadioDisabled"
        type="radio"
        name="flexRadioDisabled"
        disabled
      />
      <label class="form-check-label" for="flexRadioDisabled">Disabled radio</label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        id="flexRadioCheckedDisabled"
        type="radio"
        name="flexRadioDisabled"
        checked
        disabled
      />
      <label class="form-check-label" for="flexRadioCheckedDisabled">Disabled checked radio</label>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {}
