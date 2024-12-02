import { ScTheme } from '../../utils';
import { navStyles } from './nav';
import { navLinkStyles } from './nav-link';
import { navTogglerStyles } from './nav-toggler';
import { navTogglerIconStyles } from './nav-toggler-icon';

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
  styles: [navStyles, navLinkStyles, navTogglerStyles, navTogglerIconStyles],
};

console.log(theme);
