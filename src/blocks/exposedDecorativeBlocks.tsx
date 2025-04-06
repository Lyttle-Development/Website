import type { Block } from 'payload'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { SpaceBackgroundConfig } from '@/blocks/SpaceBackground/config'
import { SpaceBackgroundBlock } from '@/blocks/SpaceBackground/Component'
import { exposedBuildingBlocks } from '@/blocks/exposedBuildingBlocks'

// Import all the blocks that will be exposed to the CMS
export const importedDecorativeBlocks: ImportBlocks = {
  spaceBackground: [SpaceBackgroundConfig, SpaceBackgroundBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedDecorativeBlocks: Block[] = [
  ...Object.values(importedDecorativeBlocks).map((b) => b[0]),
  ...exposedBuildingBlocks,
]
///////////////////////////////////////////////////////////////////////////
