import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'
import styles from './Component.module.scss'

export interface FlexibleRowProps {
  content: RenderBlock[]
}

export const FlexibleRowBlock: React.FC<FlexibleRowProps> = (props) => {
  const { content } = props
  return (
    <div className={styles.flexibleRow}>
      <RenderBlocks blocks={content} />
    </div>
  )
}
