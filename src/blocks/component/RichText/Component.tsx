import React from 'react'
import RichText from '@/components/RichText'

export interface RichTextProps {
  richText: {
    root: {
      type: string
      children: {
        type: string
        version: number
        [k: string]: unknown
      }[]
      direction: ('ltr' | 'rtl') | null
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
      indent: number
      version: number
    }
    [k: string]: unknown
  }
}

export const RichTextBlock: React.FC<RichTextProps> = (props) => {
  const { richText } = props
  return <RichText data={richText} enableGutter={false} />
}
