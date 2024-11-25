import { Tree, addProjectConfiguration, formatFiles, generateFiles } from '@nx/devkit';
import * as path from 'path';

import { HeroiconsGeneratorSchema } from './schema';

export async function heroiconsGenerator(tree: Tree, options: HeroiconsGeneratorSchema) {
  // const projectRoot = `libs/${options.name}`;

  const iconsFolder = 'libs/heroicons/src/icons';

  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });

  generateFiles(tree, path.join(__dirname, 'files'), iconsFolder, options);
  await formatFiles(tree);
}

export default heroiconsGenerator;
