import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'

export interface FlexibleRowProps {
  content: RenderBlock[]
}

export const GroupBlock: React.FC<FlexibleRowProps> = (props) => {
  const { content } = props
  return (
    <section>
      <RenderBlocks blocks={content} />
    </section>
  )
}
