import type { Block } from 'payload'
import { ContentConfig } from '@/blocks/component/Content/config'
import { MediaBlockConfig } from '@/blocks/component/MediaBlock/config'
import { MediaBlock } from '@/blocks/component/MediaBlock/Component'
import { ContentBlock } from '@/blocks/component/Content/Component'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { ArchiveBlock } from '@/blocks/component/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/component/CallToAction/Component'
import { FormBlock } from '@/blocks/component/Form/Component'
import { FormBlockConfig } from '@/blocks/component/Form/config'
import { ArchiveConfig } from '@/blocks/component/ArchiveBlock/config'
import { CallToActionConfig } from '@/blocks/component/CallToAction/config'
import { ColorfulTitleConfig } from '@/blocks/component/ColorfulTitle/config'
import { ColorfulTitleBlock } from '@/blocks/component/ColorfulTitle/Component'
import { exposedDecorativeBlocks } from '@/blocks/exposedDecorativeBlocks'

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
export const exposedComponentBlocks: Block[] = [
  ...Object.values(importedComponentBlocks).map((b) => b[0]),
  ...exposedDecorativeBlocks,
]
///////////////////////////////////////////////////////////////////////////
