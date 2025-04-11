import React, { FC, Fragment } from 'react'
import type { Page } from '@/payload-types'
import type { Block } from 'payload'
import { exposedRawLayoutBlocks, importedLayoutBlocks } from '@/blocks/exposedLayoutBlocks'
import { exposedRawComponentBlocks, importedComponentBlocks } from '@/blocks/exposedComponentBlocks'
import {
  exposedRawDecorativeBlocks,
  importedDecorativeBlocks,
} from '@/blocks/exposedDecorativeBlocks'
import { exposedRawBuildingBlocks, importedBuildingBlocks } from '@/blocks/exposedBuildingBlocks'
import { importedBuildInBlocks } from '@/blocks/exposedBuildInBlocks'

export interface ImportBlocks {
  [key: string]: [Block, FC<any>]
}

export interface BlockComponents {
  [key: string]: FC<any>
}

export const exposedBlocks: Block[] = [
  ...exposedRawLayoutBlocks,
  ...exposedRawBuildingBlocks,
  ...exposedRawComponentBlocks,
  ...exposedRawDecorativeBlocks,
  // ...exposedRawBuildInBlocks,
]

export const getExposedBlockComponents = (): BlockComponents => {
  const componentBlocks: ImportBlocks = {
    ...importedLayoutBlocks,
    ...importedBuildingBlocks,
    ...importedComponentBlocks,
    ...importedDecorativeBlocks,
    ...importedBuildInBlocks,
  }
  return Object.keys(componentBlocks).reduce((acc, key) => {
    const blockConfigTuple = componentBlocks[key]
    if (blockConfigTuple) {
      const [_, blockComponent] = blockConfigTuple
      acc[key] = blockComponent
    }
    return acc
  }, {} as BlockComponents)
}

export type RenderBlock = Page['layout'][0]

export interface RenderBlocksProps {
  blocks: RenderBlock[]
}

export const RenderBlocks: React.FC<RenderBlocksProps> = ({ blocks }) => {
  const exposedBlockComponents = getExposedBlockComponents()
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (!hasBlocks) return null

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block

        if (blockType && blockType in exposedBlockComponents) {
          const Block = exposedBlockComponents[blockType]
          if (Block) {
            return <Block {...block} disableInnerContainer key={index} />
          }
        }
        return null
      })}
    </Fragment>
  )
}
