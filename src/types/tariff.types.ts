export interface ITariff {
	id: string
	title: string
	subtitle: string
	currentPrice: string
	oldPrice?: string
	image: string
	annotation?: string
	description: string[]
	currentTariff?: boolean
	theme: {
		bg: string
		color: string
	}
}
