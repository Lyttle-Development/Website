'use client'
import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'
import { heading } from '@/styles/typography'

export interface BannerTitleProps {
  title: string
  headingType?: string
  reverseAlign: boolean
}

const seed = 'pZLA8XwW5PN2rKeCEmJ7nR'

export const BannerTitleBlock: React.FC<BannerTitleProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { title, headingType, reverseAlign } = props
  return (
    <article className={styles.bannerTitle} ref={ref}>
      {React.createElement(
        headingType || 'h1',
        {
          className: classNames(heading.base),
        },
        <>{title}</>,
      )}
      <div className={styles.background}>
        <div
          className={classNames(styles.circle, {
            [styles.reverseAlign as string]: reverseAlign,
          })}
        />
        <RandomStars
          width="45rem"
          height="10rem"
          seed={seed}
          className={styles.stars}
          containerRef={ref}
          density={100}
        />
      </div>
    </article>
  )
}
