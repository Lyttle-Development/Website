// Types
import type { Block } from 'payload'
import type { ImportBlocks } from '@/blocks/RenderBlocks'

// Imports
import { PlanetsVisualBlock } from '@/blocks/decorative/PlanetsVisual/Component'
import { PlanetsVisualConfig } from '@/blocks/decorative/PlanetsVisual/config'
import { SpaceBackgroundBlock } from '@/blocks/decorative/SpaceBackground/Component'
import { SpaceBackgroundConfig } from '@/blocks/decorative/SpaceBackground/config'

// Import all the blocks that will be exposed to the CMS
export const importedDecorativeBlocks: ImportBlocks = {
  planetsVisual: [PlanetsVisualConfig, PlanetsVisualBlock],
  spaceBackground: [SpaceBackgroundConfig, SpaceBackgroundBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedRawDecorativeBlocks: Block[] = Object.values(importedDecorativeBlocks).map((b) => b[0])
export const exposedDecorativeBlocks: Block[] = [
  ...exposedRawDecorativeBlocks,
]
///////////////////////////////////////////////////////////////////////////
