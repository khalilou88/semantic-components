import { Tree, formatFiles, generateFiles } from '@nx/devkit';

import { HeroiconsGeneratorSchema } from './schema';

import path = require('path');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function heroiconsGenerator(tree: Tree, options: HeroiconsGeneratorSchema) {
  const iconsDestinationPath = 'libs/heroicons/src/icons';

  const solid16IconsSourcePath = path.join(__dirname, 'files', 'optimized', '16', 'solid');
  const solid16IconsDestinationPath = path.join(iconsDestinationPath, '16', 'solid');

  tree.children(solid16IconsSourcePath).forEach((fileName) => {
    console.log(fileName);

    const svgContent = '';
    const svgClassName = '';
    const svgFileName = '';

    const my_options = { svgContent, svgClassName, svgFileName };

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'src', 'component'),
      solid16IconsDestinationPath,
      my_options,
    );
  });

  await formatFiles(tree);
}

export default heroiconsGenerator;
