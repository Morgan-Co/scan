import { ITariff } from '@/types/tariff.types'

import Computer from '../../public/computer.png'
import LightBulb from '../../public/light_bulb.png'
import Target from '../../public/target.png'

export const tariffs: ITariff[] = [
	{
		id: 'cltj0k2ex0000wxqaopl9wqgo',
		title: 'Beginner',
		subtitle: 'Для небольшого исследования',
		currentPrice: '799 ₽',
		oldPrice: '1 200 ₽',
		image: LightBulb.src,
		annotation: 'или 150 ₽/мес. при рассрочке на 24 мес.',
		description: [
			'Безлимитная история запросов',
			'Безопасная сделка',
			'Поддержка 24/7'
		],
		theme: {
			bg: '#FFB64F',
			color: '#000000'
		},
		currentTariff: true
	},
	{
		id: 'cltjuihq80000l9toux3xk7f0',
		title: 'Pro',
		subtitle: 'Для HR и фрилансеров',
		currentPrice: '1 299 ₽',
		oldPrice: '2 600 ₽',
		image: Target.src,
		annotation: 'или 279 ₽/мес. при рассрочке на 24 мес.',
		description: [
			'Все пункты тарифа Beginner',
			'Экспорт истории',
			'Рекомендации по приоритетам'
		],
		theme: {
			bg: '#7CE3E1',
			color: '#000000'
		}
	},
	{
		id: 'cltjukmut0001l9touv3ynm0o',
		title: 'Business',
		subtitle: 'Для корпоративных клиентов',
		currentPrice: '2 379 ₽',
		oldPrice: '3 700 ₽',
		image: Computer.src,
		description: [
			'Все пункты тарифа Pro',
			'Безлимитное количество запросов',
			'Приоритетная поддержка'
		],
		theme: {
			bg: '#000000',
			color: '#ffffff'
		}
	}
]
