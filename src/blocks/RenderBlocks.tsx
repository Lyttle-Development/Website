import React, { FC, Fragment } from 'react'
import type { Page } from '@/payload-types'
import type { Block } from 'payload'
import { exposedLayoutBlocks, importedLayoutBlocks } from '@/blocks/exposedLayoutBlocks'
import { exposedComponentBlocks, importedComponentBlocks } from '@/blocks/exposedComponentBlocks'
import { exposedDecorativeBlocks, importedDecorativeBlocks } from '@/blocks/exposedDecorativeBlocks'
import { exposedBuildingBlocks, importedBuildingBlocks } from '@/blocks/exposedBuildingBlocks'

export interface ImportBlocks {
  [key: string]: [Block, FC<any>]
}

export interface BlockComponents {
  [key: string]: FC<any>
}

export const exposedBlocks: Block[] = [
  ...exposedLayoutBlocks,
  ...exposedBuildingBlocks,
  ...exposedComponentBlocks,
  ...exposedDecorativeBlocks,
]

export const getExposedBlockComponents = (): BlockComponents => {
  const componentBlocks: ImportBlocks = {
    ...importedLayoutBlocks,
    ...importedBuildingBlocks,
    ...importedComponentBlocks,
    ...importedDecorativeBlocks,
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
