import { Tree, readProjectConfiguration } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';

import { heroiconsLibraryGenerator } from './generator';
import { HeroiconsLibraryGeneratorSchema } from './schema';

describe('heroicons-library generator', () => {
  let tree: Tree;
  const options: HeroiconsLibraryGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await heroiconsLibraryGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
