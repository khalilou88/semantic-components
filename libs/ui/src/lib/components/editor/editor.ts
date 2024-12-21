import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewEncapsulation,
  afterNextRender,
  computed,
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
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

import { cn } from '../../utils';
import { scArticleClasses } from '../typography';
import { ScExtensionBlockquote } from './extensions/extension-blockquote';
import { ScExtensionBold } from './extensions/extension-bold';
import { ScExtensionBulletList } from './extensions/extension-bullet-list';
import { ScExtensionCode } from './extensions/extension-code';
import { ScExtensionColor } from './extensions/extension-color';
import { ScExtensionFontFamily } from './extensions/extension-font-family';
import { ScExtensionHeading } from './extensions/extension-heading';
import { ScExtensionHighlight } from './extensions/extension-highlight';
import { ScExtensionHistory } from './extensions/extension-history';
import { ScExtensionHorizontalRule } from './extensions/extension-horizontal-rule';
import { ScExtensionImage } from './extensions/extension-image';
import { ScExtensionItalic } from './extensions/extension-italic';
import { ScExtensionLink } from './extensions/extension-link';
import { ScExtensionOrderedList } from './extensions/extension-ordered-list';
import { ScExtensionParagraph } from './extensions/extension-paragraph';
import { ScExtensionStrike } from './extensions/extension-strike';
import { ScExtensionTable } from './extensions/extension-table';
import { ScExtensionTextAlignAction } from './extensions/extension-text-align';
import { ScExtensionTextStyle } from './extensions/extension-text-style';
import { ScExtensionUnderline } from './extensions/extension-underline';
import { ScExtensionYoutube } from './extensions/extension-youtube';
import { ScExtensions } from './extensions/extensions';
import { ScExtensionsGroup } from './toolbar/extensions-group';
import { ScExtensionsSeparator } from './toolbar/extensions-separator';

@Component({
  selector: 'sc-editor',
  imports: [
    ScExtensionHighlight,
    ScExtensionColor,
    ScExtensionBold,
    ScExtensionUnderline,
    ScExtensionYoutube,
    ScExtensionImage,
    ScExtensionFontFamily,
    ScExtensionLink,
    ScExtensionItalic,
    ScExtensionBlockquote,
    ScExtensionBulletList,
    ScExtensionOrderedList,
    ScExtensionTextAlignAction,
    ScExtensionTextStyle,
    ScExtensionParagraph,
    ScExtensionHistory,
    ScExtensionsSeparator,
    ScExtensionsGroup,
    ScExtensionStrike,
    ScExtensionHorizontalRule,
    ScExtensionCode,
    ScExtensionHeading,
    ScExtensionTable,
  ],
  template: `
    <div
      class="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700"
    >
      <div class="border-b px-3 py-1 dark:border-gray-600">
        <sc-extensions-group>
          <sc-extension-history />
          <sc-extensions-separator />
          <sc-extension-bold />
          <sc-extension-italic />
          <sc-extension-underline />
          <sc-extension-highlight />
          <sc-extension-link />
          <sc-extension-text-style />
          <sc-extension-color />
          <sc-extension-font-family />
          <sc-extensions-separator />
          <sc-extension-text-align />
        </sc-extensions-group>

        <sc-extensions-group>
          <sc-extension-heading />
          <sc-extension-paragraph />
          <sc-extensions-separator />
          <sc-extension-image />
          <sc-extension-youtube />
          <sc-extension-bullet-list />
          <sc-extension-ordered-list />
          <sc-extension-blockquote />
          <sc-extensions-separator />
          <sc-extension-strike />
          <sc-extension-horizontal-rule />
          <sc-extension-code />
        </sc-extensions-group>

        <sc-extensions-group>
          <sc-extension-table />
        </sc-extensions-group>
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
  host: {
    '[class]': 'classes()',
  },
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
  classes = computed(() => cn('', this.class()));

  editorClass = input<string>('');
  editorClasses = computed(() =>
    cn('mx-auto focus:outline-none', scArticleClasses(), this.editorClass()),
  );

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

    if (this.extensions.bulletList() || this.extensions.orderedList()) {
      const ListItem = (await import('@tiptap/extension-list-item')).ListItem;
      extensions.push(ListItem);
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

    if (this.extensions.table()) {
      const TableHeader = (await import('@tiptap/extension-table-header')).TableHeader;
      extensions.push(TableHeader);

      const TableRow = (await import('@tiptap/extension-table-row')).TableRow;
      extensions.push(TableRow);

      const TableCell = (await import('@tiptap/extension-table-cell')).TableCell;
      extensions.push(TableCell);

      const Table = (await import('@tiptap/extension-table')).Table;

      extensions.push(
        Table.configure({
          resizable: true,
        }),
      );
    }

    this.editor = new Editor({
      element: this.editorDiv().nativeElement,
      extensions: extensions,
      content: this._value(),
      editable: this._isEditable(),
      editorProps: {
        attributes: {
          class: this.editorClasses(),
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
