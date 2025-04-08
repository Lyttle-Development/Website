import React from 'react'
import styles from './Component.module.scss'
import classNames from 'classnames'
import { RandomStars } from '@/components/RandomStars'

export interface MoonVisualProps {}

const seed = 'bAjWtFxec3GUDvYXqMCLz8'

export const MoonVisualBlock: React.FC<MoonVisualProps> = (props) => {
  return (
    <div className={classNames(styles.moonVisual)}>
      <img src="/svgs/blobs/roundish-2.svg" alt="Roundish Blob" className={styles.blob} />
      <img src="/svgs/moon.svg" alt="Roundish Blob" className={styles.moon} />
      <img src="/svgs/kite.svg" alt="A planet" className={styles.kite} />
      <RandomStars width="45rem" height="45rem" seed={seed} />
    </div>
  )
}
