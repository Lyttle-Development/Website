import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'
import styles from './Component.module.scss'

export interface FlexibleRowProps {
  content: RenderBlock[]
  maxWidth?: number
}

export const GroupBlock: React.FC<FlexibleRowProps> = (props) => {
  const { content, maxWidth } = props
  return (
    <section className={styles.group} style={{ maxWidth: maxWidth ? `${maxWidth}rem` : '100%' }}>
      <RenderBlocks blocks={content} />
    </section>
  )
}
