import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'

export interface FlexibleRowProps {
  content: RenderBlock[]
}

export const FlexibleRowBlock: React.FC<FlexibleRowProps> = (props) => {
  const { content } = props
  return (
    <div className="flexible-row">
      <RenderBlocks blocks={content} />
    </div>
  )
}
