import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string
	error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, error, type, id, ...props }, ref) => {
		return (
			<input
				type={type}
				id={id}
				className={cn(
					`flex h-[43px] w-full rounded-[5px] border-[2px] border-[#C7C7C7] py-[12px] px-[19px] text-base`,
					className,
					error && 'border-red shadow-error placeholder:text-red'
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
