import Google from '../../public/google.svg'
import Facebook from '../../public/facebook.svg'
import Yandex from '../../public/yandex.svg'

interface ISocial {
	img: string
	url: string
}

export const socials: ISocial[] = [
	{
		img: Google,
		url: 'google'
	},
	{
		img: Facebook,
		url: 'facebook'
	},
	{
		img: Yandex,
		url: 'yandex'
	}
]
