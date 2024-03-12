import Image from 'next/image'

import About from '@/components/about/About'
import Hero from '@/components/hero/Hero'
import Tariffs from '@/components/tariffs/Tariffs'

import AboutImage from '@/../public/about_image.png'

/*FIXME:

		auth-token.service.ts --- domain: 'localhost'

*/

export default function Home() {
	return (
		<div className={`w-full`}>
			<Hero />
			<About />
			<Image
				src={AboutImage}
				alt='About'
				className={`mb-[108px]`}
			/>
			<Tariffs />
		</div>
	)
}
