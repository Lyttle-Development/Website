import type { Block } from 'payload'
import { ContentConfig } from './Content/config'
import { MediaBlockConfig } from '@/blocks/MediaBlock/config'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { ArchiveBlock } from './ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { FormBlockConfig } from '@/blocks/Form/config'
import { ArchiveConfig } from '@/blocks/ArchiveBlock/config'
import { CallToActionConfig } from '@/blocks/CallToAction/config'
import { ColorfulTitleConfig } from '@/blocks/ColorfulTitle/config'
import { ColorfulTitleBlock } from '@/blocks/ColorfulTitle/Component'

// Import all the component blocks that will be exposed to the CMS
export const importedComponentBlocks: ImportBlocks = {
  colorfulTitle: [ColorfulTitleConfig, ColorfulTitleBlock],

  content: [ContentConfig, ContentBlock],
  mediaBlock: [MediaBlockConfig, MediaBlock],

  archive: [ArchiveConfig, ArchiveBlock],
  cta: [CallToActionConfig, CallToActionBlock],
  formBlock: [FormBlockConfig, FormBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedComponentBlocks: Block[] = Object.values(importedComponentBlocks).map(
  (b) => b[0],
)
///////////////////////////////////////////////////////////////////////////
