import { Tree, addProjectConfiguration, formatFiles, generateFiles } from '@nx/devkit';
import * as path from 'path';

import { HeroiconsDirectivesGeneratorSchema } from './schema';

export async function heroiconsDirectivesGenerator(
  tree: Tree,
  options: HeroiconsDirectivesGeneratorSchema,
) {
  const projectRoot = `libs/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default heroiconsDirectivesGenerator;
