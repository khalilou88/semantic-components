import { ScApp, ScLayout, ScNav, ScPage, ScSection } from '../utils';
import { theme } from './theme';

const nav: ScNav = {
  id: 'nav',
  links: [],
};

const layout: ScLayout = {
  id: 'stacked',
  type: 'page',
  elements: [nav],
};

const heroLayout: ScLayout = {
  id: 'heroSection',
  type: 'section',
  elements: [nav],
};

const heroSection: ScSection = {
  id: 'heroSection',
  layout: heroLayout,
};

const homePage: ScPage = {
  id: 'homePage',
  title: 'Home page',
  link: {
    id: 'I don t need it',
    text: 'Home',
    href: '/',
  },
  layout: layout,
  elements: [heroSection],
};

//update nav with links
nav.links = [...nav.links, homePage.link];

const app: ScApp = {
  name: 'My app',
  prefix: 'app',
  theme: theme,
  pages: [homePage],
};

console.log(app);
