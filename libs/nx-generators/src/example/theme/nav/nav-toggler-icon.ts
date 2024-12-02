import { ScCommonStyles, ScElementStyles, ScStateStyles } from '../../../utils';

const commonStyles: ScCommonStyles = {
  classes: [],
};

const navOpenState: ScStateStyles = {
  name: 'nav-open',
  lightModeClasses: [],
  darkModeClasses: [],
};

const navClosedState: ScStateStyles = {
  name: 'nav-closed',
  lightModeClasses: [],
  darkModeClasses: [],
};

const navTogglerStates: ScStateStyles[] = [navOpenState, navClosedState];
export const navTogglerIconStyles: ScElementStyles = {
  name: 'navTogglerIcon',
  commonStyles: commonStyles,
  statesStyles: navTogglerStates,
};
