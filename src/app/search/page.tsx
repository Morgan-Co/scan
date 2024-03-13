'use client'

import Image from 'next/image'

import SearchForm from '@/components/search-form/SearchForm'
import Heading from '@/components/ui/headings/Heading'


import Document from '../../../public/document.png'
import Folders from '../../../public/folders.png'

import SearchImage from '@/../public/search_image.png'

export default function Search() {
	return (
		<section className={`mb-[64px] mt-[69px] w-full relative`}>
			<Heading className={`text-[40px] max-w-[817px] mb-[25px]`}>
				Найдите необходимые данные в пару кликов.
			</Heading>
			<h4>
				Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск
			</h4>
			<SearchForm />
			<Image
				src={SearchImage}
				alt='Search Image'
				className={`sm:absolute bottom-0 -right-[150px] sm:w-fit w-full mt-[24px] sm:mt-0`}
			/>
			<Image
				src={Document}
				alt='Search Image'
				className={`absolute top-[9%] right-[20%] hidden sm:block`}
			/>
			<Image
				src={Folders}
				alt='Search Image'
				className={`absolute top-[10%] -right-[150px] hidden sm:block`}
			/>
		</section>
	)
}
