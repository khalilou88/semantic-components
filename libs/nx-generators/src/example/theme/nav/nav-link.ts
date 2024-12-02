import { ScCommonStyles, ScElementStyles, ScStateStyles } from '../../../utils';

const commonStyles: ScCommonStyles = {
  classes: [],
};

const navLinkDefaultState: ScStateStyles = {
  name: 'default',
  lightModeClasses: [],
  darkModeClasses: ['text-gray-300', 'hover:bg-gray-700', 'hover:text-white'],
};

const navLinkActiveState: ScStateStyles = {
  name: 'active', //no hover state for active mode, maybe add a rule
  lightModeClasses: [],
  darkModeClasses: ['bg-gray-900', 'text-white'],
};

const navLinkStates: ScStateStyles[] = [navLinkDefaultState, navLinkActiveState];
export const navLinkStyles: ScElementStyles = {
  name: 'navLink',
  commonStyles: commonStyles,
  statesStyles: navLinkStates,
};
