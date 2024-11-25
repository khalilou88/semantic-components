import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';

import { HeroiconsGeneratorSchema } from './schema';

import path = require('path');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function heroiconsGenerator(tree: Tree, options: HeroiconsGeneratorSchema) {
  const iconsDestinationPath = 'libs/heroicons';

  //1
  const solid16IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/16/solid';
  const solid16IconsDestinationPath = path.join(iconsDestinationPath, '16', 'solid', 'src');

  generateIconsComponents(tree, solid16IconsSourcePath, solid16IconsDestinationPath);

  //2
  const solid20IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/20/solid';
  const solid20IconsDestinationPath = path.join(iconsDestinationPath, '20', 'solid', 'src');

  generateIconsComponents(tree, solid20IconsSourcePath, solid20IconsDestinationPath);

  //3
  const outline24IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/24/outline';
  const outline24IconsDestinationPath = path.join(iconsDestinationPath, '24', 'outline', 'src');

  generateIconsComponents(tree, outline24IconsSourcePath, outline24IconsDestinationPath);

  //4
  const solid24IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/24/solid';
  const solid24IconsDestinationPath = path.join(iconsDestinationPath, '24', 'solid', 'src');

  generateIconsComponents(tree, solid24IconsSourcePath, solid24IconsDestinationPath);

  await formatFiles(tree);
}

function generateIconsComponents(
  tree: Tree,
  iconsSourcePath: string,
  iconsDestinationPath: string,
) {
  const exports = [];
  tree.children(iconsSourcePath).forEach((fileName) => {
    const name = path.parse(fileName).name;

    const svgContent = tree.read(path.join(iconsSourcePath, fileName), 'utf-8');

    const svgClassName = `Svg${names(name).className}Icon`;
    const svgFileName = `svg-${names(name).fileName}-icon`;
    const svgSelector = `svg-${names(name).fileName}-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    const o = { svgContent, svgClassName, svgFileName, svgSelector };

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'component'),
      path.join(iconsDestinationPath, 'icons'),
      o,
    );
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));
}

export default heroiconsGenerator;
