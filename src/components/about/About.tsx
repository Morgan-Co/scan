import Image from 'next/image'

import { aboutCards } from '@/constants/about-cards.constants'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../ui/carousel'
import Heading from '../ui/headings/Heading'

const About = () => {
	return (
		<section className={`mb-[70px]`}>
			<Heading className={`mb-[70px] text-[45px]`}>Почему именно мы</Heading>
			<div className={`flex justify-center`}>
				<Carousel>
					<CarouselContent className={`m-0 gap-[40px] h-[235px] items-center`}>
						{aboutCards.map(item => (
							<CarouselItem
								key={item.text}
								className={`max-w-[400px] h-[225px] basis-1/3 shadow-main rounded-[10px] p-[22px_0_0_19px]`}
							>
								<div className={`w-fit h-fit`}>
									<Image
										src={item.img}
										alt={item.text}
										className={`mb-[12px]`}
									/>
									<p>{item.text}</p>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	)
}

export default About
