import Image from 'next/image'

import Spinner from '../../../public/spinner.svg'

import { cn } from '@/lib/utils'

const Loader = ({ className }: { className?: string }) => {
	return (
		<Image
			src={Spinner}
			alt='Spinner'
			className={cn(`animate-spin`, className)}
		/>
	)
}

export default Loader
