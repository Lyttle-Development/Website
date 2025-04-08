import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'

export interface BannerTitleProps {
  title: string
  headingType?: string
  reverseAlign: boolean
}

const seed = 'pZLA8XwW5PN2rKeCEmJ7nR'

export const BannerTitleBlock: React.FC<BannerTitleProps> = (props) => {
  const { title, headingType, reverseAlign } = props
  return (
    <article className={styles.bannerTitle}>
      {React.createElement(
        headingType || 'h1',
        {
          className: classNames(styles.colorfulTitle),
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
          density={300}
        />
      </div>
    </article>
  )
}
