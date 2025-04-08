import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'
import styles from './Component.module.scss'
import classNames from 'classnames'

export interface ContainerProps {
  content: RenderBlock[]
  container?: boolean
}

export const ContainerBlock: React.FC<ContainerProps> = (props) => {
  const { content, container } = props
  return (
    <section
      className={classNames(styles.container, {
        container: container || false,
      })}
    >
      <RenderBlocks blocks={content} />
    </section>
  )
}
