import Search from '@/../public/search.png'
import Shield from '@/../public/shield.png'
import Watch from '@/../public/watch.png'
import { StaticImageData } from 'next/image'

interface IAboutCard {
	img: StaticImageData
	text: string
}

export const aboutCards: IAboutCard[] = [
	{
		img: Watch,
		text: 'Высокая и оперативная скорость обработки заявки'
	},

	{
		img: Search,
		text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
	},
	{
		img: Shield,
		text: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству'
	},
	{
		img: Watch,
		text: 'Высокая и оперативная скорость обработки заявки kaban'
	},

	{
		img: Search,
		text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос kaban'
	},
	{
		img: Shield,
		text: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству kaban'
	}
]
