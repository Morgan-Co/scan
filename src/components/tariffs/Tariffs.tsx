import { tariffs } from '@/constants/tariffs-cards.constants'

import TariffCard from '../tariff-card/TariffCard'
import Heading from '../ui/headings/Heading'

const Tariffs = () => {
	return (
		<section className={`mb-[118px]`}>
			<Heading className={`sm:text-[45px] text-[28px] sm:mb-[70px] mb-[37px]`}>наши тарифы</Heading>
			<div className={`flex flex-wrap justify-between gap-y-[40px]`}>
				{tariffs.map(item => (
					<TariffCard
						key={item.id}
						{...item}
					/>
				))}
			</div>
		</section>
	)
}

export default Tariffs
