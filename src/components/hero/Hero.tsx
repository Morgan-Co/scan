import Image from 'next/image'
import Link from 'next/link'

import HeroImage from '../../../public/hero_image.png'
import Heading from '../ui/headings/Heading'

const Hero = () => {
	return (
		<section
			className={`sm:bg-[url('../../public/hero_image.png')] bg-no-repeat bg-[right_-30px_top] w-full sm:h-[620px] sm:mb-[109px] mb-[39.3px] mt-[24px]`}
		>
			<div className={`max-w-[743px] mb-5`}>
				<Heading
					className={`sm:text-[56px] sm:leading-[65px] text-[28px] leading-[33.6px]`}
				>
					сервис по поиску публикаций о компании по его ИНН
				</Heading>
			</div>
			<p className={`max-w-[534px] sm:mb-[70px] mb-[32px]`}>
				Комплексный анализ публикаций, получение данных в формате PDF на
				электронную почту.
			</p>
			<Link
				href={'/search'}
				className={`sm:w-[335px] flex justify-center items-center w-full sm:mb-0 mb-[22px] max-w-full bg-blue h-[59px] text-white hover:bg-blue/90 font-medium transition-colors text-[22px] rounded-[5px] active:bg-blue disabled:bg-blue/50`}
			>
				Запросить данные
			</Link>
			<Image
				src={HeroImage}
				alt='Hero Image'
				className={`sm:hidden flex`}
				width={347}
				height={327}
			/>
		</section>
	)
}

export default Hero
