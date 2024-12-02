import { ScElementState, ScElementStyles, ScTheme } from '../utils';

const navLinkDefaultState: ScElementState = {
  name: 'default',
  lightModeClasses: [],
  darkModeClasses: ['text-gray-300', 'hover:bg-gray-700', 'hover:text-white'],
};

const navLinkActiveState: ScElementState = {
  name: 'active', //no hover state for active mode, maybe add a rule
  lightModeClasses: [],
  darkModeClasses: ['bg-gray-900', 'text-white'],
};

const navLinkStates: ScElementState[] = [navLinkDefaultState, navLinkActiveState];
const navLinkStyles: ScElementStyles = {
  name: 'navLink',
  states: navLinkStates,
};

export const theme: ScTheme = {
  styles: [navLinkStyles],
};
