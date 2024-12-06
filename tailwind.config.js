const { join } = require('path');
const tailwindWorkspacePreset = require('./tailwind-workspace-preset');

module.exports = {
  presets: [tailwindWorkspacePreset],
  content: [
    join(__dirname, 'apps/showcase/src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, 'libs/ui/src/**/!(*.stories|*.spec).{ts,html}'),
  ],
};
