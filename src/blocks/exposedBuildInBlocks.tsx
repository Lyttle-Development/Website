// Types
import type { Block } from 'payload'
import type { ImportBlocks } from '@/blocks/RenderBlocks'

// Imports
import { ArchiveBlock } from '@/blocks/build-in/ArchiveBlock/Component'
import { ArchiveConfig } from '@/blocks/build-in/ArchiveBlock/config'
import { CallToActionBlock } from '@/blocks/build-in/CallToAction/Component'
import { CallToActionConfig } from '@/blocks/build-in/CallToAction/config'
import { ContentBlock } from '@/blocks/build-in/Content/Component'
import { ContentConfig } from '@/blocks/build-in/Content/config'
import { FormBlock } from '@/blocks/build-in/Form/Component'
import { FormBlockConfig } from '@/blocks/build-in/Form/config'
import { MediaBlock } from '@/blocks/build-in/MediaBlock/Component'
import { MediaBlockConfig } from '@/blocks/build-in/MediaBlock/config'

// Import all the component blocks that will be exposed to the CMS
export const importedBuildInBlocks: ImportBlocks = {
  archive: [ArchiveConfig, ArchiveBlock],
  content: [ContentConfig, ContentBlock],
  cta: [CallToActionConfig, CallToActionBlock],
  formBlock: [FormBlockConfig, FormBlock],
  mediaBlock: [MediaBlockConfig, MediaBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedRawBuildInBlocks: Block[] = Object.values(importedBuildInBlocks).map((b) => b[0])
export const exposedBuildInBlocks: Block[] = [
  ...exposedRawBuildInBlocks,
]
///////////////////////////////////////////////////////////////////////////
