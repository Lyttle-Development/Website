import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { Svg, SvgIcon } from '@/svg/Svg'

export interface SpaceBackgroundProps {
  content: RenderBlock[]
  container?: boolean
}

export const SpaceBackgroundBlock: React.FC<SpaceBackgroundProps> = (props) => {
  const { content, container } = props
  return (
    <div className={classNames(styles.spaceBackground)}>
      <div className={styles.background}>
        <Svg size={100} icon={SvgIcon.HeadingVector} />
        <img src="/test.svg" alt="EE" className={styles.backgroundBanner} />
      </div>
      <div
        className={classNames(styles.content, {
          container: container || false,
        })}
      >
        <RenderBlocks blocks={content} />
      </div>
    </div>
  )
}
