// Types
import type { Block } from 'payload'
import type { ImportBlocks } from '@/blocks/RenderBlocks'

// Usages
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'

// Imports
import { GroupBlock } from '@/blocks/building/Group/Component'
import { GroupConfig } from '@/blocks/building/Group/config'
import { SpacerBlock } from '@/blocks/layout/Spacer/Component'
import { SpacerConfig } from '@/blocks/layout/Spacer/config'

// Import all the blocks that will be exposed to the CMS
export const importedBuildingBlocks: ImportBlocks = {
  group: [GroupConfig, GroupBlock],
  spacer: [SpacerConfig, SpacerBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedRawBuildingBlocks: Block[] = Object.values(importedBuildingBlocks).map((b) => b[0])
export const exposedBuildingBlocks: Block[] = [
  ...exposedRawBuildingBlocks,
  ...exposedComponentBlocks,
]
///////////////////////////////////////////////////////////////////////////
