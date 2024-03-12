'use client'

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

import { navLinks } from '@/constants/nav-links.constants'

import UserImage from '../../../public/user_image.png'

import GradientLogo from '@/../public/gradient_logo.svg'
import { SITE_PAGES } from '@/configs/pages-url.config'
import { userService } from '@/services/user.service'

const Header = () => {
	const { data: profile } = useQuery({
		queryKey: ['user-profile'],
		queryFn: () => userService.getProfile()
	})

	return (
		<header className={`flex h-[93px]`}>
			<div className={`mainContainer items-center`}>
				<Link href={SITE_PAGES.HOME}>
					<Image
						src={GradientLogo}
						alt='Logo'
					/>
				</Link>
				<nav className={`flex justify-between w-[236px] list-none`}>
					{navLinks.map(link => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`text-[14px]`}
							>
								{link.title}
							</Link>
						</li>
					))}
				</nav>
				{profile ? (
					<div className={`flex w-[414px] justify-between`}>
						<div
							className={`flex flex-col justify-center items-end w-[175px] h-[63px] pr-[8px] bg-[#f4f4f4] rounded-[5px]`}
						>
							<div className={`flex gap-[6px]`}>
								<span className={`text-[10px] text-gray flex items-center`}>
									Использовано компаний
								</span>
								<span className={`text-[14px] font-bold`}>
									{profile.eventFiltersInfo.usedCompanyCount}
								</span>
							</div>
							<div className={`flex gap-[6px]`}>
								<span className={`text-[10px] text-gray flex items-center`}>
									Лимит по компаниям
								</span>
								<span className={`text-[14px] text-green font-bold`}>
									{profile.eventFiltersInfo.companyLimit}
								</span>
							</div>
						</div>
						<div className={`flex gap-[3px]`}>
							<div className={`flex flex-col items-end`}>
								<span className={`text-[14px] text-[#4d4d4d]`}>Алексей А.</span>
								<button className={`text-[10px] text-gray`}>Выйти</button>
							</div>
							<Image
								src={UserImage}
								alt='User Image'
								className={`w-[32px] h-[32px]`}
							/>
						</div>
					</div>
				) : (
					<div className={'flex items-center'}>
						<Link
							href={'/auth'}
							className={`text-[#999999] text-[14px] leading-[17px] hover:text-black/60 transition`}
						>
							Зарегистрироваться
						</Link>
						<span className={`w-[2px] h-[26px] bg-primary-turquoise block mx-[20px]`}></span>
						<Link href={'/auth'} className={`text-[14px] text-black leading-[17px] p-[4px_10px_5px_12px] bg-secondary-turquoise rounded-[5px] hover:bg-secondary-turquoise`}>Войти</Link>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
