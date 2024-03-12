import localFont from 'next/font/local'

import { cn } from '@/lib/utils'

const local = localFont({ src: '../../../fonts/Ferry-Black.ttf' })

const Heading = ({
	children,
	className
}: {
	children: string
	className?: string
}) => {
	return (
		<h1
			className={cn(
				local.className,
				`font-extrabold text-[40px] leading-[48px] text-black`,
				className
			)}
		>
			{children}
		</h1>
	)
}

export default Heading
