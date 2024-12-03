import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    //TODO
    localStorage['theme'] = 'dark';
    //localStorage['theme'] = 'light'

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    document.documentElement.classList.toggle(
      'dark',
      localStorage['theme'] === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }
}
