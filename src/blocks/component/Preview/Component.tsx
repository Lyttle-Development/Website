import React from 'react'
import styles from './Component.module.scss'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import type { StaticImageData } from 'next/image'
import { Media } from '@/components/Media'
import classNames from 'classnames'

export interface ButtonProps extends MediaBlockProps {
  className?: string
  staticImage?: StaticImageData
}

export const PreviewBlock: React.FC<ButtonProps> = (props) => {
  const { className, staticImage, media } = props
  return (
    <article className={styles.preview}>
      {media || staticImage ? (
        <Media
          imgClassName={classNames(styles.image, className)}
          resource={media}
          src={staticImage}
        />
      ) : (
        <div className={classNames(styles.image, className)}></div>
      )}
    </article>
  )
}
