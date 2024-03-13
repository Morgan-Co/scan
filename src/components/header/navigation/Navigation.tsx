import Link from 'next/link'

import { navLinks } from '@/constants/nav-links.constants'

const Navigation = () => {
	return (
		<nav
			className={`flex justify-between w-[236px] list-none sm:flex-row flex-col items-center sm:items-start gap-[26px] sm:gap-0 mb-[75px] sm:mb-0`}
		>
			{navLinks.map(link => (
				<li key={link.href}>
					<Link
						href={link.href}
						className={`sm:text-[14px] text-base sm:text-black text-white`}
					>
						{link.title}
					</Link>
				</li>
			))}
		</nav>
	)
}

export default Navigation
