import type { SVGProps } from 'react'

export enum SvgIcon {
  Ellipse = 'ellipse',
}

export interface SvgProps extends SVGProps<SVGSVGElement> {
  size: number
  icon: SvgIcon
  className?: string
}

export function Svg({ size, icon, ...rest }: SvgProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...rest}>
      <use href={`#${icon}`} />
    </svg>
  )
}
