import { SvgIcon } from '@/svg/Svg'

export function SvgHeadingVector() {
  return (
    <symbol id={SvgIcon.HeadingVector} viewBox="0 0 1920 930">
      <mask id="mask0_6_1461" maskUnits="userSpaceOnUse" x="-1" y="-4" width="1922" height="934">
        <path
          d="M0 742.417V-3L1920 -2.80786V388.881C1508 1295.27 480.5 799.973 0 742.417Z"
          fill="#252257"
          stroke="#252257"
        />
      </mask>
      <g mask="url(#mask0_6_1461)">
        <rect y="-3" width="1920" height="946" fill="#252257" />
        <rect y="-3" width="1920" height="1207" fill="url(#paint0_linear_6_1461)" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_6_1461"
          x1="960"
          y1="-3"
          x2="960"
          y2="1204"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#100429" />
          <stop offset="1" stopColor="#100429" stopOpacity="0" />
        </linearGradient>
      </defs>
    </symbol>
  )
}
