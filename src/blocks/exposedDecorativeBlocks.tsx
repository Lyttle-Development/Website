import type { Block } from 'payload'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { SpaceBackgroundConfig } from '@/blocks/decorative/SpaceBackground/config'
import { SpaceBackgroundBlock } from '@/blocks/decorative/SpaceBackground/Component'
import { PlanetsVisualConfig } from '@/blocks/decorative/PlanetsVisual/config'
import { PlanetsVisualBlock } from '@/blocks/decorative/PlanetsVisual/Component'

// Import all the blocks that will be exposed to the CMS
export const importedDecorativeBlocks: ImportBlocks = {
  spaceBackground: [SpaceBackgroundConfig, SpaceBackgroundBlock],
  planetsVisual: [PlanetsVisualConfig, PlanetsVisualBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedDecorativeBlocks: Block[] = [
  ...Object.values(importedDecorativeBlocks).map((b) => b[0]),
]
///////////////////////////////////////////////////////////////////////////
