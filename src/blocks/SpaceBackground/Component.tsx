import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'
import styles from './Component.module.scss'

export interface SpaceBackgroundProps {
  content: RenderBlock[]
}

export const SpaceBackgroundBlock: React.FC<SpaceBackgroundProps> = (props) => {
  const { content } = props
  return (
    <div className={styles.spaceBackground}>
      <RenderBlocks blocks={content} />
    </div>
  )
}
