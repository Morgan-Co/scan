'use client'

import Image from 'next/image'

import DocumentCard from '@/components/document-card/DocumentCard'
import Heading from '@/components/ui/headings/Heading'

import { ISearchResponseData } from '@/types/search.types'

import SearchResults from '../../../../public/search_results.png'

export default function Results() {
	const data: ISearchResponseData =
		typeof window !== 'undefined'
			? JSON.parse(localStorage.getItem('responseData')!)
			: null
	console.log(data)
	if (!data) return

	return (
		<div>
			<section className={`flex`}>
				<div>
					<Heading>Ищем. Скоро будут результаты</Heading>
					<p>Поиск может занять некоторое время, просим сохранять терпение.</p>
				</div>
				<Image
					src={SearchResults}
					alt='Search Results'
				/>
			</section>
			<section>
				<Heading>Общая сводка</Heading>
				<span>Найдено 4 221 вариантов</span>
				<div
					className={`border-[2px] border-primary-turquoise h-[158px] rounded-[10px]`}
				>
					<div
						className={`w-[133px] bg-primary-turquoise h-full flex flex-col justify-center items-center gap-[26px]`}
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
					<div></div>
				</div>
			</section>
			<section>
				<Heading>Список документов</Heading>
				<div className={`flex flex-wrap`}>
					{data?.documents.map(card => (
						<DocumentCard
							key={card.ok.id}
							{...card.ok}
						/>
					))}
				</div>
			</section>
			{/* {data.data.map(item => (
				<div key={item.data[0].date}>{item.data[0].date}</div>
			))} */}
		</div>
	)
}
