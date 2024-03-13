'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Open from '../../../../public/open.svg'
import WhiteLogo from '../../../../public/white_logo.png'
import Navigation from '../navigation/Navigation'
import Profile from '../profile/Profile'

import GradientLogo from '@/../public/gradient_logo.svg'
import { SITE_PAGES } from '@/configs/pages-url.config'
import Close from '../../../../public/close.svg'

const MenuBurger = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	return (
		<div className={`mainContainer items-center !flex sm:!hidden`}>
			<Link href={SITE_PAGES.HOME}>
				<Image
					src={GradientLogo}
					alt='logo'
					width={111}
					height={111}
				/>
			</Link>
			<div
				className={`${isOpen ? 'translate-x-0' : 'translate-x-[8000px]'} transition-transform absolute top-0 left-0 w-full h-[494px] bg-primary-turquoise flex items-center flex-col px-[20px]`}
			>
				<div className={`flex w-full justify-between h-[92px]`}>
					<Link href={SITE_PAGES.HOME}>
						<Image
							src={WhiteLogo}
							alt='logo'
						/>
					</Link>
					<button type="button" onClick={()=> setIsOpen(false)}>
						<Image src={Close} alt='Close' width={24.75} height={24.75}/>
					</button>
				</div>
				<div className={`flex flex-col items-center mt-[36px]`}>
					<Navigation />
					<Profile />
				</div>
			</div>
			<button
				type='button'
				onClick={() => setIsOpen(true)}
			>
				<Image
					src={Open}
					alt='Open'
				/>
			</button>
		</div>
	)
}

export default MenuBurger
