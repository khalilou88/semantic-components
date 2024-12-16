import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-radio-group-page',
  imports: [],
  template: `
    <h1>Radios</h1>
    <div class="form-check">
      <input class="form-check-input" id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
      <label class="form-check-label" for="flexRadioDefault1">Default radio</label>
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
