import type { Block } from 'payload'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { GroupConfig } from '@/blocks/building/Group/config'
import { GroupBlock } from '@/blocks/building/Group/Component'
import { SpacerConfig } from '@/blocks/layout/Spacer/config'
import { SpacerBlock } from '@/blocks/layout/Spacer/Component'

// Import all the blocks that will be exposed to the CMS
export const importedBuildingBlocks: ImportBlocks = {
  group: [GroupConfig, GroupBlock],
  spacer: [SpacerConfig, SpacerBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedBuildingBlocks: Block[] = [
  ...Object.values(importedBuildingBlocks).map((b) => b[0]),
  ...exposedComponentBlocks,
]
///////////////////////////////////////////////////////////////////////////
