'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import classNames from 'classnames'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

const Label: React.FC<
  {
    ref?: React.Ref<HTMLLabelElement>
  } & React.ComponentProps<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
> = ({ className, ref, ...props }) => (
  <LabelPrimitive.Root className={classNames(labelVariants(), className)} ref={ref} {...props} />
)

export { Label }
