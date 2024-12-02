export interface ScElementState {
  name: string;
  lightModeClasses: string[];
  darkModeClasses: string[];
}

export interface ScElementStyles {
  name: string;
  states: ScElementState[];
}

export interface ScTheme {
  styles: ScElementStyles[];
}

//---------------------------------

interface ScElement {
  id: string;
}

export interface ScLayout extends ScElement {
  type: 'page' | 'section';
  elements: ScElement[];
}

export interface ScSection extends ScElement {
  layout: ScLayout;
}

export interface ScNav extends ScElement {
  links: NavLink[];
}

export interface NavLink extends ScElement {
  href: string;
  text: string;
}

export interface ScPage extends ScElement {
  title: string;
  link: NavLink;
  layout: ScLayout;
  elements: ScElement[];
}

export interface ScApp {
  name: string;
  prefix: string;
  pages: ScPage[];
  theme: ScTheme;
}
