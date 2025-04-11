import type { BannerBlock as BannerBlockProps } from '@/payload-types'
import React from 'react'
import RichText from '@/components/RichText'
import classNames from 'classnames'

type Props = {
  className?: string
} & BannerBlockProps

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={classNames('mx-auto my-8 w-full', className)}>
      <div
        className={classNames('border py-3 px-6 flex items-center rounded', {
          'border-border bg-card': style === 'info',
          'border-error bg-error/30': style === 'error',
          'border-success bg-success/30': style === 'success',
          'border-warning bg-warning/30': style === 'warning',
        })}
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  )
}
