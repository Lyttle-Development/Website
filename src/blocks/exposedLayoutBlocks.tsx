import type { Block } from 'payload'
import { FlexibleRowConfig } from '@/blocks/layout/FlexibleRow/config'
import { FlexibleRowBlock } from '@/blocks/layout/FlexibleRow/Component'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { exposedBuildingBlocks } from '@/blocks/exposedBuildingBlocks'

// Import all the blocks that will be exposed to the CMS
export const importedLayoutBlocks: ImportBlocks = {
  flexibleRow: [FlexibleRowConfig, FlexibleRowBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedLayoutBlocks: Block[] = [
  ...Object.values(importedLayoutBlocks).map((b) => b[0]),
  ...exposedBuildingBlocks,
]
///////////////////////////////////////////////////////////////////////////
