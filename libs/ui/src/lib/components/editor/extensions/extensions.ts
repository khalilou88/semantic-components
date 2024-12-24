import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScExtensions {
  //history extension
  undo = signal<boolean>(false);
  redo = signal<boolean>(false);
  history = computed(() => this.undo() || this.redo());

  //
  highlight = signal<boolean>(false);
  color = signal<boolean>(false);
  underline = signal<boolean>(false);
  link = signal<boolean>(false);
  textAlign = signal<boolean>(false);
  fontFamily = signal<boolean>(false);
  bold = signal<boolean>(false);
  youtube = signal<boolean>(false);
  image = signal<boolean>(false);
  code = signal<boolean>(false);
  strike = signal<boolean>(false);
  italic = signal<boolean>(false);
  blockquote = signal<boolean>(false);
  bulletList = signal<boolean>(false);
  orderedList = signal<boolean>(false);
  horizontalRule = signal<boolean>(false);
  textStyle = signal<boolean>(false);
  table = signal<boolean>(false);
}
