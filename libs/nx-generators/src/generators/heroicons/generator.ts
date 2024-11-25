import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';

import { HeroiconsGeneratorSchema } from './schema';

import path = require('path');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function heroiconsGenerator(tree: Tree, options: HeroiconsGeneratorSchema) {
  const iconsDestinationPath = 'libs/heroicons';

  //1
  const solid16IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/16/solid';
  const solid16IconsDestinationPath = path.join(
    iconsDestinationPath,
    'solid',
    '16',
    'src',
    'icons',
  );

  generateIconsComponents(tree, solid16IconsSourcePath, solid16IconsDestinationPath);

  //2
  const solid20IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/20/solid';
  const solid20IconsDestinationPath = path.join(
    iconsDestinationPath,
    'solid',
    '20',
    'src',
    'icons',
  );

  generateIconsComponents(tree, solid20IconsSourcePath, solid20IconsDestinationPath);

  //3
  const outline24IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/24/outline';
  const outline24IconsDestinationPath = path.join(
    iconsDestinationPath,
    'outline',
    '24',
    'src',
    'icons',
  );

  generateIconsComponents(tree, outline24IconsSourcePath, outline24IconsDestinationPath);

  //4
  const solid24IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/24/solid';
  const solid24IconsDestinationPath = path.join(
    iconsDestinationPath,
    'solid',
    '24',
    'src',
    'icons',
  );

  generateIconsComponents(tree, solid24IconsSourcePath, solid24IconsDestinationPath);

  await formatFiles(tree);
}

function generateIconsComponents(
  tree: Tree,
  solid16IconsSourcePath: string,
  solid16IconsDestinationPath: string,
) {
  tree.children(solid16IconsSourcePath).forEach((fileName) => {
    const svgContent = tree.read(path.join(solid16IconsSourcePath, fileName), 'utf-8');
    const svgClassName = `${names(fileName).className}Icon`;
    const svgFileName = `${names(fileName).fileName}-icon`;
    const svgSelector = `${names(fileName).fileName}-icon`;

    const o = { svgContent, svgClassName, svgFileName, svgSelector };

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'src', 'component'),
      solid16IconsDestinationPath,
      o,
    );
  });
}

export default heroiconsGenerator;
