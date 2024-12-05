import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  forwardRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import { ScExtensions } from './extensions';
import { ScExtensionHighlight } from './extensions/extension-highlight';
import { ScExtensionTextStyle } from './extensions/extention-text-style';
import { BlockquoteActionComponent } from './toolbar/blockquote-action.component';
import { BoldActionComponent } from './toolbar/bold-action.component';
import { BulletListActionComponent } from './toolbar/bullet-list-action.component';
import { ColorActionComponent } from './toolbar/color-action.component';
import { EditorToolbarDividerComponent } from './toolbar/editor-toolbar-divider.component';
import { EditorToolbarLineComponent } from './toolbar/editor-toolbar-line.component';
import { FontFamilyActionComponent } from './toolbar/font-family-action.component';
import { HistoryActionComponent } from './toolbar/history-action.component';
import { ImageActionComponent } from './toolbar/image-action.component';
import { ItalicActionComponent } from './toolbar/italic-action.component';
import { LinkActionComponent } from './toolbar/link-action.component';
import { OrderedListActionComponent } from './toolbar/ordered-list-action.component';
import { TextAlignActionComponent } from './toolbar/text-align-action.component';
import { TypographyActionComponent } from './toolbar/typography-action.component';
import { UnderlineActionComponent } from './toolbar/underline-action.component';
import { YoutubeActionComponent } from './toolbar/youtube-action.component';

@Component({
  selector: 'sc-editor',
  imports: [
    ScExtensionHighlight,
    ColorActionComponent,
    BoldActionComponent,
    UnderlineActionComponent,
    YoutubeActionComponent,
    ImageActionComponent,
    FontFamilyActionComponent,
    LinkActionComponent,
    ItalicActionComponent,
    BlockquoteActionComponent,
    BulletListActionComponent,
    OrderedListActionComponent,
    TextAlignActionComponent,
    ScExtensionTextStyle,
    TypographyActionComponent,
    HistoryActionComponent,
    EditorToolbarDividerComponent,
    EditorToolbarLineComponent,
  ],
  template: `
    <div
      class="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
    >
      <div class="border-b px-3 py-1 dark:border-gray-600">
        <sc-editor-toolbar-line>
          <sc-history-action />
          <sc-editor-toolbar-divider />
          <sc-bold-action />
          <sc-italic-action />
          <sc-underline-action />
          <sc-extension-highlight />
          <sc-link-action />
          <sc-extension-text-style />
          <sc-color-action />
          <sc-font-family-action />
          <sc-editor-toolbar-divider />
          <sc-text-align-action />
        </sc-editor-toolbar-line>

        <sc-editor-toolbar-line>
          <sc-typography-action />
          <sc-editor-toolbar-divider />
          <sc-image-action />
          <sc-youtube-action />
          <sc-bullet-list-action />
          <sc-ordered-list-action />
          <sc-blockquote-action />
        </sc-editor-toolbar-line>
      </div>

      <div class="rounded-b-lg bg-white px-4 py-2 dark:bg-gray-800">
        <label class="sr-only" for="wysiwyg-example">Publish post</label>
        <div
          class="block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400"
          #editorDiv
        ></div>
      </div>
    </div>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScEditor),
      multi: true,
    },
  ],
})
export class ScEditor implements ControlValueAccessor {
  private readonly _cdr = inject(ChangeDetectorRef);

  readonly editorDiv = viewChild.required<ElementRef>('editorDiv');

  _value = signal('');

  _isEditable = signal(true);

  class = input<string>('');

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onChange: (value: string) => void = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  _onTouched: () => void = () => {};

  editor!: Editor;

  extensions = inject(ScExtensions);

  constructor() {
    afterNextRender(() => {
      this.createEditor();
    });
  }

  async createEditor() {
    const extensions = [];
    extensions.push(Document);
    extensions.push(Heading);
    extensions.push(Paragraph);
    extensions.push(Text);
    extensions.push(ListItem);

    if (this.extensions.highlight()) {
      const Highlight = (await import('@tiptap/extension-highlight')).Highlight;
      extensions.push(Highlight);
    }

    if (this.extensions.textStyle()) {
      const TextStyle = (await import('@tiptap/extension-text-style')).TextStyle;
      extensions.push(TextStyle);
    }

    if (this.extensions.color()) {
      const Color = (await import('@tiptap/extension-color')).Color;
      extensions.push(Color);
    }

    if (this.extensions.fontFamily()) {
      const FontFamily = (await import('@tiptap/extension-font-family')).FontFamily;
      extensions.push(FontFamily);
    }

    if (this.extensions.underline()) {
      const Underline = (await import('@tiptap/extension-underline')).Underline;
      extensions.push(Underline);
    }

    if (this.extensions.image()) {
      const Image = (await import('@tiptap/extension-image')).Image;
      extensions.push(Image);
    }

    if (this.extensions.youtube()) {
      const Youtube = (await import('@tiptap/extension-youtube')).Youtube;
      extensions.push(Youtube);
    }

    if (this.extensions.link()) {
      const Link = (await import('@tiptap/extension-link')).Link;
      extensions.push(Link);
    }

    if (this.extensions.textAlign()) {
      const TextAlign = (await import('@tiptap/extension-text-align')).TextAlign;
      extensions.push(
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
      );
    }

    if (this.extensions.bulletList()) {
      const BulletList = (await import('@tiptap/extension-bullet-list')).BulletList;
      extensions.push(BulletList);
    }

    if (this.extensions.orderedList()) {
      const OrderedList = (await import('@tiptap/extension-ordered-list')).OrderedList;
      extensions.push(OrderedList);
    }

    if (this.extensions.strike()) {
      const Strike = (await import('@tiptap/extension-strike')).Strike;
      extensions.push(Strike);
    }

    if (this.extensions.italic()) {
      const Italic = (await import('@tiptap/extension-italic')).Italic;
      extensions.push(Italic);
    }

    if (this.extensions.bold()) {
      const Bold = (await import('@tiptap/extension-bold')).Bold;
      extensions.push(Bold);
    }

    if (this.extensions.horizontalRule()) {
      const HorizontalRule = (await import('@tiptap/extension-horizontal-rule')).HorizontalRule;
      extensions.push(HorizontalRule);
    }

    if (this.extensions.blockquote()) {
      const Blockquote = (await import('@tiptap/extension-blockquote')).Blockquote;
      extensions.push(Blockquote);
    }

    if (this.extensions.code()) {
      const Code = (await import('@tiptap/extension-code')).Code;
      extensions.push(Code);
    }

    if (this.extensions.history()) {
      const History = (await import('@tiptap/extension-history')).History;
      extensions.push(History);
    }

    this.editor = new Editor({
      element: this.editorDiv().nativeElement,
      extensions: extensions,
      content: this._value(),
      editable: this._isEditable(),
      editorProps: {
        attributes: {
          class: this.class(),
        },
      },
    });

    this.editor.on('update', ({ editor }) => {
      this.setHtmlContent(editor.getHTML());
    });

    this.editor.on('blur', () => {
      this._onTouched();
    });
  }

  writeValue(value: string): void {
    this._value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isEditable.set(!isDisabled);
  }

  setHtmlContent(htmlContent: string) {
    this._value.set(htmlContent);
    this._onChange(htmlContent);
    this._cdr.markForCheck();
  }
}
