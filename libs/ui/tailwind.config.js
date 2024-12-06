const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const tailwindWorkspacePreset = require('../../tailwind-workspace-preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [tailwindWorkspacePreset],
};
