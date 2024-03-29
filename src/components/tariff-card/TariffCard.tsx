import { ITariff } from '@/types/tariff.types'

import { Button } from '../ui/buttons/Button'
import CardHeading from '../ui/headings/CardHeading'

const TariffCard = ({
	theme: { bg, color },
	currentPrice,
	description,
	image,
	subtitle,
	title,
	annotation,
	oldPrice
}: ITariff) => {
	return (
		<div
			style={{ borderColor: bg }}
			className={`w-[415px] h-[540px] rounded-[10px] border-[2px] overflow-hidden`}
		>
			<div
				style={{
					borderColor: bg,
					backgroundColor: bg,
					backgroundImage: `url(${image})`
					// backgroundPosition: 'top 30% right 0'
				}}
				className={`border-b-[2px] pt-[30px] sm:pl-[30px] pl-[24px] h-[132px] sm:bg-[length:92px_83px] bg-[length:59px_53px] bg-no-repeat bg-[top_10%_right_20px] sm:bg-[top_30%_right_0px]`}
			>
				<div>
					<CardHeading
						style={{ color }}
						className={`font-medium text-black sm:text-[30px] leading-[36px] mb-[10px] text-[20px]`}
					>
						{title}
					</CardHeading>
					<h4
						style={{ color }}
						className={`text-[18px] leading-[21px]`}
					>
						{subtitle}
					</h4>
				</div>
			</div>
			<div
				className={`flex flex-col justify-between p-[20px_24px_31px_24px] sm:p-[33px_0px_24px_30px] h-[75%]`}
			>
				<div>
					<div className={`flex gap-[19px] mb-[10px]`}>
						<CardHeading>{currentPrice}</CardHeading>
						<CardHeading className={`line-through text-gray`}>
							{oldPrice!}
						</CardHeading>
					</div>
					<p className={`text-[18px] leading-[21px]`}>{annotation}</p>
				</div>
				<div>
					<CardHeading className={`text-[20px] mb-[10px]`}>
						В тариф входит:
					</CardHeading>
					<ul className='cardList'>
						{description.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<Button
					className={`sm:max-w-[355px] w-full font-normal text-[18px] sm:-text-[20px]`}
				>
					Перейти в личный кабинет
				</Button>
			</div>
		</div>
	)
}

export default TariffCard
