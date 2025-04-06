import { SvgEllipse } from '@/svg/svgs/SvgEllipse'
import { SvgHeadingVector } from '@/svg/svgs/SvgHeadingVector'

export function SvgSpriteSheet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <SvgEllipse />
        <SvgHeadingVector />
      </defs>
    </svg>
  )
}
