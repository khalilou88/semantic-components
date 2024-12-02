export interface ScStateStyles {
  name: string;
  lightModeClasses: string[];
  darkModeClasses: string[];
}

export interface ScCommonStyles {
  classes: string[];
}

export interface ScElementStyles {
  name: string;
  commonStyles: ScCommonStyles;
  statesStyles: ScStateStyles[];
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

// eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-empty-interface
export interface ScButton extends ScElement {}

export interface ScIcon extends ScElement {
  name: string;
  library: 'heroicons' | 'tabler-icons' | 'lucide-icons';
}

export interface ScIconSate {
  icon: ScIcon;
  state: string;
}

export interface ScIconButton extends ScButton {
  icons: ScIconSate[];
}

export interface ScNav extends ScElement {
  links: NavLink[];
  toggler: ScIconButton;
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
