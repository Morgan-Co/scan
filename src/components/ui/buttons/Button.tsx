import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';



import { cn } from '@/lib/utils';


const buttonVariants = cva('', {
	variants: {
		variant: {
			default: `max-w-full bg-blue h-[59px] text-white hover:bg-blue/90 font-medium transition-colors text-[22px] rounded-[5px] w-[335px] active:bg-blue disabled:bg-blue/50`,
			arrow:
				'bg-none w-[39px] h-[39px] rounded-none flex justify-center items-center',
			'date-picker': ''
		},
		size: {
			// default: "h-10 px-4 py-2",
			// sm: "h-9 rounded-md px-3",
			// lg: "h-11 rounded-md px-8",
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
})

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export {Button, buttonVariants}