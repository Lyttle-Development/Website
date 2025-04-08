// Types
import type { Block } from 'payload'
import type { ImportBlocks } from '@/blocks/RenderBlocks'

// Usages
import { exposedDecorativeBlocks } from '@/blocks/exposedDecorativeBlocks'

// Imports
import { ButtonBlock } from '@/blocks/component/Button/Component'
import { ButtonConfig } from './component/Button/config'
import { ColorfulTitleBlock } from '@/blocks/component/ColorfulTitle/Component'
import { ColorfulTitleConfig } from '@/blocks/component/ColorfulTitle/config'
import { RichTextBlock } from '@/blocks/component/RichText/Component'
import { RichTextConfig } from './component/RichText/config'

// Import all the component blocks that will be exposed to the CMS
export const importedComponentBlocks: ImportBlocks = {
  button: [ButtonConfig, ButtonBlock],
  colorfulTitle: [ColorfulTitleConfig, ColorfulTitleBlock],
  richText: [RichTextConfig, RichTextBlock],
}

///////////////////////////////////////////////////////////////////////////
// !!! Dynamic Code Generation !!!
///////////////////////////////////////////////////////////////////////////
export const exposedRawComponentBlocks: Block[] = Object.values(importedComponentBlocks).map((b) => b[0])
export const exposedComponentBlocks: Block[] = [
  ...exposedRawComponentBlocks,
  ...exposedDecorativeBlocks,
]
///////////////////////////////////////////////////////////////////////////
