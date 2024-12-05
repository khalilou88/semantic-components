const { join } = require('path');
const tailwindWorkspacePreset = require('../../tailwind-workspace-preset');

module.exports = {
  presets: [tailwindWorkspacePreset],
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), 'libs/ui/src/**'],
};
