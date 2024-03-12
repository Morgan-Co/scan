'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const labelVariants = cva('block', {
	variants: {
		variant: {
			auth: 'text-gray text-base leading-[19px] block mb-[15px]',
			search: 'text-[18px] text-black mb-[20px]'
		}
	},
	defaultVariants: {
		variant: 'auth'
	}
})

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
		VariantProps<typeof labelVariants>
>(({ className, variant, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants({ variant, className }))}
		{...props}
	/>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
