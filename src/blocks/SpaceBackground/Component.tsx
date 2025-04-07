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

  // @ts-ignore
  return (
    <div className={classNames(styles.spaceBackground)}>
      <div className={styles.background}>
        <img
          src="/svgs/home/headerBackgroundBanner.svg"
          alt="Header Background Banner"
          className={styles.backgroundBanner}
        />
        <RandomStars width="100vw" height="calc(100vh - 2rem)" />
        <RandomCircles width="100vw" height="calc(100vh - 2rem)" />
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
