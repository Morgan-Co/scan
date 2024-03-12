import { tariffs } from '@/constants/tariffs-cards.constants'

import TariffCard from '../tariff-card/TariffCard'
import Heading from '../ui/headings/Heading'

const Tariffs = () => {
	return (
		<section className={`mb-[118px]`}>
			<Heading className={`mb-[70px]`}>наши тарифы</Heading>
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
