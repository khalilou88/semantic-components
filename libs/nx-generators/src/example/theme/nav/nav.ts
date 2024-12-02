import { ScCommonStyles, ScElementStyles, ScStateStyles } from '../../../utils';

const commonStyles: ScCommonStyles = {
  classes: [],
};

const navMobileState: ScStateStyles = {
  name: 'mobile',
  lightModeClasses: [],
  darkModeClasses: [],
};

const navDesktopState: ScStateStyles = {
  name: 'desktop',
  lightModeClasses: [],
  darkModeClasses: [],
};

const navStates: ScStateStyles[] = [navMobileState, navDesktopState];
export const navStyles: ScElementStyles = {
  name: 'nav',
  commonStyles: commonStyles,
  statesStyles: navStates,
};
