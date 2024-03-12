import { SITE_PAGES } from '@/configs/pages-url.config'

interface INavLink {
	title: string
	href: string
}

export const navLinks: INavLink[] = [
	{
		title: 'Главная',
		href: SITE_PAGES.HOME
	},
	{
		title: 'Тарифы',
		href: '/tariffs'
	},
	{
		title: 'FAQ',
		href: '/faq'
	},
]
