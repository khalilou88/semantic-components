import { Tree, formatFiles, generateFiles, names, workspaceRoot, writeJsonFile } from '@nx/devkit';
import * as path from 'path';

import { HeroiconsGeneratorSchema } from './schema';

interface HeroIcon {
  size: 16 | 20 | 24;
  type: 'solid' | 'outline';
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function heroiconsGenerator(tree: Tree, options: HeroiconsGeneratorSchema) {
  const iconsDestinationPath = 'libs/heroicons';

  //1
  const solid16IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/16/solid';
  const solid16IconsDestinationPath = path.join(iconsDestinationPath, '16', 'solid', 'src');

  generateIconsComponents(tree, solid16IconsSourcePath, solid16IconsDestinationPath, 16, 'solid');

  //2
  const solid20IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/20/solid';
  const solid20IconsDestinationPath = path.join(iconsDestinationPath, '20', 'solid', 'src');

  generateIconsComponents(tree, solid20IconsSourcePath, solid20IconsDestinationPath, 20, 'solid');

  //3
  const outline24IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/24/outline';
  const outline24IconsDestinationPath = path.join(iconsDestinationPath, '24', 'outline', 'src');

  generateIconsComponents(
    tree,
    outline24IconsSourcePath,
    outline24IconsDestinationPath,
    24,
    'outline',
  );

  //4
  const solid24IconsSourcePath =
    'libs/nx-generators/src/generators/heroicons/files/optimized/24/solid';
  const solid24IconsDestinationPath = path.join(iconsDestinationPath, '24', 'solid', 'src');

  generateIconsComponents(tree, solid24IconsSourcePath, solid24IconsDestinationPath, 24, 'solid');

  await formatFiles(tree);
}

const icons: HeroIcon[] = [];

function generateIconsComponents(
  tree: Tree,
  iconsSourcePath: string,
  iconsDestinationPath: string,
  iconSize: 16 | 20 | 24,
  iconType: 'solid' | 'outline',
) {
  const exports = [];
  tree.children(iconsSourcePath).forEach((fileName) => {
    const name = path.parse(fileName).name;

    const svgContent1 = tree.read(path.join(iconsSourcePath, fileName), 'utf-8');

    const re = /(<svg)/;
    const svgContent = svgContent1.replace(re, '$1 [ngClass]="class()"');

    const svgClassName = `Svg${names(name).className}Icon`;
    const svgFileName = `svg-${names(name).fileName}-icon`;
    const svgSelector = `svg-${names(name).fileName}-icon`;

    exports.push(`export * from './icons/${svgFileName}';`);

    icons.push({
      name: name,
      size: iconSize,
      type: iconType,
    });

    const o = { svgContent, svgClassName, svgFileName, svgSelector };

    generateFiles(
      tree,
      path.join(__dirname, 'files', 'component'),
      path.join(iconsDestinationPath, 'icons'),
      o,
    );
  });

  tree.write(path.join(iconsDestinationPath, 'index.ts'), exports.join('\r\n'));

  writeJsonFile(path.join(workspaceRoot, 'apps', 'showcase', 'public', 'heroicons.json'), icons);
}

export default heroiconsGenerator;
