import type { Block } from 'payload'
import { Content } from './Content/config'
import { MediaBlock as MediaBlockConfig } from '@/blocks/MediaBlock/config'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { ImportBlocks } from '@/blocks/RenderBlocks'
import { ArchiveBlock } from './ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { FormBlock as FormBlockConfig } from '@/blocks/Form/config'
import { Archive } from '@/blocks/ArchiveBlock/config'
import { CallToAction } from '@/blocks/CallToAction/config'

// Import all the component blocks that will be exposed to the CMS
export const importedComponentBlocks: ImportBlocks = {
  content: [Content, ContentBlock],
  mediaBlock: [MediaBlockConfig, MediaBlock],

  archive: [Archive, ArchiveBlock],
  cta: [CallToAction, CallToActionBlock],
  formBlock: [FormBlockConfig, FormBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedComponentBlocks: Block[] = Object.values(importedComponentBlocks).map(
  (b) => b[0],
)
///////////////////////////////////////////////////////////////////////////
