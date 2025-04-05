import React, { FC, Fragment } from 'react'
import type { Page } from '@/payload-types'
import { importedBlocks } from '@/blocks/exposedBlocks'
import { importedComponentBlocks } from '@/blocks/exposedComponentBlocks'
import type { Block } from 'payload'

export interface ImportBlocks {
  [key: string]: [Block, FC<any>]
}

export interface BlockComponents {
  [key: string]: FC<any>
}

const getExposedBlockComponents = (): BlockComponents => {
  const componentBlocks: ImportBlocks = { ...importedBlocks, ...importedComponentBlocks }
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
            return (
              <div className="my-16" key={index}>
                <Block {...block} disableInnerContainer />
              </div>
            )
          }
        }
        return null
      })}
    </Fragment>
  )
}
