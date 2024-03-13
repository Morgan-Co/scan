'use client'

import { format, parseISO } from 'date-fns'
import Image from 'next/image'

import DocumentCard from '@/components/document-card/DocumentCard'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import Heading from '@/components/ui/headings/Heading'

import { ISearchResponseData } from '@/types/search.types'

import SearchResults from '../../../../public/search_results.png'
import Loader from '@/components/ui/Loader'

export default function Results() {
	const data: ISearchResponseData =
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('responseData')!)
			: null
	console.log(data)

	const documents = data?.documents
	const histograms = data?.histograms

	return (
		<div>
			<section className={`flex flex-wrap justify-between`}>
				<div>
					<Heading className={`max-w-[509px]`}>Ищем. Скоро будут результаты</Heading>
					<p>Поиск может занять некоторое время, просим сохранять терпение.</p>
				</div>
				<Image
					src={SearchResults}
					alt='Search Results'
				/>
			</section>
			<section className={`mb-[107px]`}>
				<Heading className={`text-[30px] mb-[17px]`}>Общая сводка</Heading>
				<span
					className={`mb-[27px] block text-[18px] text-gray leading-[22px]`}
				>
					Найдено вариантов: {data?.histograms.length}
				</span>
				<div
					className={`border-[2px] border-primary-turquoise h-[158px] rounded-[10px] flex sm:flex-row flex-col max-w-[1260px] sm:ml-[30px]`}
				>
					<div
						className={`sm:w-[133px] w-full bg-primary-turquoise sm:h-full h-[75px] flex sm:flex-col flex-row justify-center items-center gap-[26px]`}
					>
						<p className={`font-medium text-[20px] text-white w-[78px]`}>
							Период
						</p>
						<p className={`font-medium text-[20px] text-white w-[78px]`}>
							Всего
						</p>
						<p className={`font-medium text-[20px] text-white w-[78px]`}>
							Риски
						</p>
					</div>
					<Carousel className={`w-full sm:h-full h-fit`}>
						<CarouselContent className={`m-0 sm:h-[156px] h-[73px] items-center`}>
							{histograms ? (
								histograms.map(item => (
									<CarouselItem
										key={`${item.data[0].date} ${item.data[0].value}`}
										className={`sm:w-[137px] px-5 sm:h-[124px] sm:border-r-[2px] border-[#949494] sm:basis-1/6 flex sm:flex-col flex-row items-center justify-between`}
									>
										<div>{format(parseISO(item.data[0].date), 'dd.MM.y')}</div>
										<div>{item.data[0].value}</div>
										<div>0</div>
									</CarouselItem>
								))
							) : (
								<div className={`flex flex-col justify-center items-center w-full h-[50px]`}>
									<Loader className={`w-[50px] h-[50px]`}/>
									<span className={`text-[18px]`}>Загружаем данные</span>
								</div>
							)}
						</CarouselContent>
						<CarouselPrevious className={`-left-[165px] sm:block hidden`} />
						<CarouselNext className={`sm:block hidden`} />
					</Carousel>
				</div>
			</section>
			<section className={`mb-[109px]`}>
				<Heading className={`text-[30px] mb-[58px]`}>Список документов</Heading>
				<div className={`flex flex-wrap gap-[38px]`}>
					{documents &&
						documents?.map(card => (
							<DocumentCard
								key={card.ok.id}
								{...card.ok}
							/>
						))}
				</div>
			</section>
		</div>
	)
}
