import { cn } from '@/lib/utils';
import { CSSProperties } from 'react'


const CardHeading = ({
	children,
	className,
	style
}: {
	children: string
	className?: string
	style?: CSSProperties
}) => {
	return (
		<h3
			className={cn(
				`font-medium text-black text-[30px] leading-[36px]`,
				className
			)}
			style={style}
		>
			{children}
		</h3>
	)
}

export default CardHeading