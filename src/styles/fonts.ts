import { DM_Serif_Display, Poppins } from 'next/font/google'

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const dmSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
})
