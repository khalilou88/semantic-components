import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { heroiconsDirectivesGenerator } from './generator';
import { HeroiconsDirectivesGeneratorSchema } from './schema';

describe('heroicons-directives generator', () => {
  let tree: Tree;
  const options: HeroiconsDirectivesGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await heroiconsDirectivesGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
