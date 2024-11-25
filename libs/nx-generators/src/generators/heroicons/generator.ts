import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';

import { HeroiconsGeneratorSchema } from './schema';

import path = require('path');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function heroiconsGenerator(tree: Tree, options: HeroiconsGeneratorSchema) {
  const iconsDestinationPath = 'libs/heroicons/src/icons';

  const solid16IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/16/solid';
  const solid16IconsDestinationPath = path.join(iconsDestinationPath, '16', 'solid');

  tree.children(solid16IconsSourcePath).forEach((fileName) => {
    console.log(fileName);

    const svgContent = tree.read(path.join(solid16IconsSourcePath, fileName)).toString();
    const svgClassName = `${names(fileName).className}Icon`;
    const svgFileName = `${names(fileName).fileName}-icon`;
    const svgSelector = `${names(fileName).fileName}-icon`;

    const my_options = { svgContent, svgClassName, svgFileName, svgSelector };

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
