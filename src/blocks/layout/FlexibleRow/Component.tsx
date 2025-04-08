import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface FlexibleRowProps {
  content: RenderBlock[]
  container?: boolean
}

export const FlexibleRowBlock: React.FC<FlexibleRowProps> = (props) => {
  const { content, container } = props
  return (
    <section
      className={classNames(styles.flexibleRow, {
        container: container || false,
      })}
    >
      <RenderBlocks blocks={content} />
    </section>
  )
}
