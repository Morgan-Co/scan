import Image from 'next/image'
import Link from 'next/link'

import Navigation from './navigation/Navigation'
import Profile from './profile/Profile'
import GradientLogo from '@/../public/gradient_logo.svg'
import { SITE_PAGES } from '@/configs/pages-url.config'
import MenuBurger from './menu-burger/MenuBurger'

const Header = () => {
	return (
		<header className={`flex h-[93px]`}>
			<div className={`mainContainer items-center sm:!flex !hidden`}>
				<Link href={SITE_PAGES.HOME}>
					<Image
						src={GradientLogo}
						alt='Logo'
					/>
				</Link>
				<Navigation />
				<Profile />
			</div>
			<MenuBurger/>
		</header>
	)
}

export default Header
