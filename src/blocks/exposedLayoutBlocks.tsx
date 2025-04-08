// Types
import type { Block } from 'payload'
import type { ImportBlocks } from '@/blocks/RenderBlocks'

// Usages
import { exposedBuildingBlocks } from '@/blocks/exposedBuildingBlocks'

// Imports
import { FlexibleRowBlock } from '@/blocks/layout/FlexibleRow/Component'
import { FlexibleRowConfig } from '@/blocks/layout/FlexibleRow/config'

// Import all the blocks that will be exposed to the CMS
export const importedLayoutBlocks: ImportBlocks = {
  flexibleRow: [FlexibleRowConfig, FlexibleRowBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedRawLayoutBlocks: Block[] = Object.values(importedLayoutBlocks).map((b) => b[0])
export const exposedLayoutBlocks: Block[] = [
  ...exposedRawLayoutBlocks,
  ...exposedBuildingBlocks,
]
///////////////////////////////////////////////////////////////////////////
