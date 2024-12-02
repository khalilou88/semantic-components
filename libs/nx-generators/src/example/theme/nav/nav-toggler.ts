import { ScCommonStyles, ScElementStyles, ScStateStyles } from '../../../utils';

const commonStyles: ScCommonStyles = {
  classes: [],
};

const navTogglerNavOpenState: ScStateStyles = {
  name: 'nav-open',
  lightModeClasses: [],
  darkModeClasses: [],
};

const navTogglerNavClosedState: ScStateStyles = {
  name: 'nav-closed',
  lightModeClasses: [],
  darkModeClasses: [],
};

const navTogglerStates: ScStateStyles[] = [navTogglerNavOpenState, navTogglerNavClosedState];
export const navTogglerStyles: ScElementStyles = {
  name: 'navToggler',
  commonStyles: commonStyles,
  statesStyles: navTogglerStates,
};
