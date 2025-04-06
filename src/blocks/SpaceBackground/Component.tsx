import React from 'react'
import { RenderBlock, RenderBlocks } from '@/blocks/RenderBlocks'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'
import { Rocket } from '@/components/Rocket'
import { RandomCircles } from '@/components/RandomCircles'

export interface SpaceBackgroundProps {
  content: RenderBlock[]
  container?: boolean
}

export const SpaceBackgroundBlock: React.FC<SpaceBackgroundProps> = (props) => {
  const { content, container } = props

  return (
    <div className={classNames(styles.spaceBackground)}>
      <div className={styles.background}>
        <img
          src="/svgs/home/headerBackgroundBanner.svg"
          alt="EE"
          className={styles.backgroundBanner}
        />
        {/*  Create random stars mech based on width */}
        <RandomStars />
        <RandomCircles />
        <Rocket />
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
