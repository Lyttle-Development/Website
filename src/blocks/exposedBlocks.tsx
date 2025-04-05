import type { Block } from 'payload'
import { FlexibleRow } from '@/blocks/FlexibleRow/config'
import { exposedComponentBlocks } from '@/blocks/exposedComponentBlocks'

export const exposedBlocks: Block[] = [FlexibleRow, ...exposedComponentBlocks]
