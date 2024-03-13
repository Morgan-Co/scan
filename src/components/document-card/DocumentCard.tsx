'use client'

import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import React from 'react'

import { IDocumentCard } from '@/types/search.types'

import { getContent } from '@/lib/utils'
import Image from 'next/image'

const DocumentCard = ({
	attributes: { wordCount },
	content: { markup },
	title: { text },
	issueDate,
	url,
	source: { name }
}: IDocumentCard) => {
	const { content, imgUrl } = getContent(markup)

	return (
		<div
			className={`max-w-[621px] rounded-[10px] shadow-main bg-white flex flex-col justify-center items-center p-[19px_25px_35.5px_25px] box-border`}
		>
			<div>
				<div className={`flex gap-[14px] mb-[24px]`}>
					<span className={`text-[16px] text-[#949494] leading-[20px]`}>
						{format(parseISO(issueDate), 'dd.MM.y')}
					</span>
					<span
						className={`text-[16px] text-[#949494] leading-[20px] underline`}
					>
						{name}
					</span>
				</div>
				<div className={`mb-[14px]`}>
					<h2 className={`font-medium text-[26px] leading-[31.5px]`}>{text}</h2>
				</div>
				{imgUrl && (
					<Image
						src={imgUrl}
						alt='Test'
						className={`mb-[20px]`}
					/>
				)}
				<div className={`mb-[32px]`}>{content}</div>
				<div className={`flex items-end justify-between`}>
					<Link
						href={url}
						className={`w-[223px] h-[46.54px] bg-secondary-turquoise inline-flex justify-center items-center rounded-[5px]`}
					>
						Читать в источнике
					</Link>
					<span className={`text-base text-[#949494]`}>Слов: {wordCount}</span>
				</div>
			</div>
		</div>
	)
}

export default DocumentCard
