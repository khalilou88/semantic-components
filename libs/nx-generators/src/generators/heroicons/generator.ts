import { Tree, formatFiles, generateFiles } from '@nx/devkit';

import { HeroiconsGeneratorSchema } from './schema';

import path = require('path');

export async function heroiconsGenerator(tree: Tree, options: HeroiconsGeneratorSchema) {
  const iconsDestinationPath = 'libs/heroicons/src/icons';

  const solid16IconsSourcePath = path.join(__dirname, 'files', 'optimized', '16', 'solid');
  const solid16IconsDestinationPath = path.join(iconsDestinationPath, '16', 'solid');

  tree.children(solid16IconsSourcePath).forEach((fileName) => {
    console.log(fileName);

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'src', 'component'),
      solid16IconsDestinationPath,
      options,
    );
  });

  await formatFiles(tree);
}

export default heroiconsGenerator;
