import type { Block } from 'payload'
import { FlexibleRowConfig } from '@/blocks/FlexibleRow/config'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'
import { FlexibleRowBlock } from '@/blocks/FlexibleRow/Component'
import { ImportBlocks } from '@/blocks/RenderBlocks'

// Import all the blocks that will be exposed to the CMS
export const importedBuildingBlocks: ImportBlocks = {
  flexibleRow: [FlexibleRowConfig, FlexibleRowBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedBuildingBlocks: Block[] = [
  ...Object.values(importedBuildingBlocks).map((b) => b[0]),
  ...exposedComponentBlocks,
]
///////////////////////////////////////////////////////////////////////////
