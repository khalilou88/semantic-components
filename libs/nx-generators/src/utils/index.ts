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

export interface ScColors {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  light: string;
  dark: string;
}

export interface ScFonts {
  sans: string;
  mono: string;
}

export interface ScTheme {
  colors: ScColors;
  fonts: ScFonts;
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
  icon: ScIcon;
}

export interface ScMultipleIconsButton extends ScButton {
  icons: ScIconSate[];
}

export interface ScNav extends ScElement {
  links: NavLink[];
  toggler: ScMultipleIconsButton;
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
