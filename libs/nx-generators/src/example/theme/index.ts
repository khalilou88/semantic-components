import { ScTheme } from '../../utils';
import { navStyles } from './nav/nav';
import { navLinkStyles } from './nav/nav-link';
import { navTogglerStyles } from './nav/nav-toggler';
import { navTogglerIconStyles } from './nav/nav-toggler-icon';

export const theme: ScTheme = {
  colors: {
    primary: '',
    secondary: '',
    success: '',
    danger: '',
    warning: '',
    info: '',
    light: '',
    dark: '',
  },
  fonts: {
    sans: 'Poppins',
    mono: 'Fira Code',
  },
  styles: [navStyles, navLinkStyles, navTogglerStyles, navTogglerIconStyles],
};

console.log(theme);
