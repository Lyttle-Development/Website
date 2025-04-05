import type { Block } from 'payload'
import { FlexibleRow } from '@/blocks/FlexibleRow/config'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'
import { FlexibleRowBlock } from '@/blocks/FlexibleRow/Component'
import { ImportBlocks } from '@/blocks/RenderBlocks'

// Import all the blocks that will be exposed to the CMS
export const importedBlocks: ImportBlocks = {
  flexibleRow: [FlexibleRow, FlexibleRowBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedBlocks: Block[] = [
  ...Object.values(importedBlocks).map((b) => b[0]),
  ...exposedComponentBlocks,
]
///////////////////////////////////////////////////////////////////////////
