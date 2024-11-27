import { Tree, formatFiles, generateFiles, names } from '@nx/devkit';
import * as path from 'path';

import { TablerIconsGeneratorSchema } from './schema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function tablerIconsGenerator(tree: Tree, options: TablerIconsGeneratorSchema) {
  const iconsDestinationPath = 'libs/tabler-icons';

  //1
  const filledIconsSourcePath = 'icons/tabler-icons/filled';
  const filledIconsDestinationPath = path.join(iconsDestinationPath, 'filled', 'src');

  generateIconsComponents(tree, filledIconsSourcePath, filledIconsDestinationPath);

  //2
  const outlineIconsSourcePath = 'icons/tabler-icons/outline';
  const outlineIconsDestinationPath = path.join(iconsDestinationPath, 'outline', 'src');

  generateIconsComponents(tree, outlineIconsSourcePath, outlineIconsDestinationPath);

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

    const svgContent1 = tree.read(path.join(iconsSourcePath, fileName), 'utf-8');

    const re = /(<svg)/;
    const svgContent = svgContent1.replace(re, '$1 [ngClass]="class()"');

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

export default tablerIconsGenerator;
