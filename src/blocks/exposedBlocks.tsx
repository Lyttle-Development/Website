import type { Block } from 'payload'
import { FlexibleRowConfig } from '@/blocks/FlexibleRow/config'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'
import { FlexibleRowBlock } from '@/blocks/FlexibleRow/Component'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { SpaceBackgroundConfig } from '@/blocks/SpaceBackground/config'
import { SpaceBackgroundBlock } from '@/blocks/SpaceBackground/Component'

// Import all the blocks that will be exposed to the CMS
export const importedBlocks: ImportBlocks = {
  flexibleRow: [FlexibleRowConfig, FlexibleRowBlock],
  spaceBackground: [SpaceBackgroundConfig, SpaceBackgroundBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedBlocks: Block[] = [
  ...Object.values(importedBlocks).map((b) => b[0]),
  ...exposedComponentBlocks,
]
///////////////////////////////////////////////////////////////////////////
