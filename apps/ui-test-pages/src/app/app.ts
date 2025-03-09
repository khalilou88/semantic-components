import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <div class="m-10"><router-outlet /></div>
  `,
  styles: ``,
})
export class App {}
