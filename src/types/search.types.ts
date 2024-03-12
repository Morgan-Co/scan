export interface ISearchRequest {
	startDate: Date
	endDate: Date
	tonality: string
	inn: string
	maxFullness: boolean
	inBusinessNews: boolean
	onlyMainRole: boolean
	onlyWithRiskFactors: boolean
	limit: string
	includeTechNews: boolean
	includeAnnouncements: boolean
	includeDigests: boolean
}

export interface ISearchRequestData {
	intervalType: string
	histogramTypes: string[]
	issueDateInterval: {
		startDate: string
		endDate: string
	}
	searchContext: {
		targetSearchEntitiesContext: {
			targetSearchEntities: {
				type: string
				inn: string
				maxFullness: boolean
				inBusinessNews: boolean
			}[]
			onlyMainRole: boolean
			tonality: string
			onlyWithRiskFactors: boolean
		}
	}
	similarMode: string
	limit: number
	sortType: string
	sortDirectionType: string
	attributeFilters: {
		excludeTechNews: boolean
		excludeAnnouncements: boolean
		excludeDigests: boolean
	}
}

export interface ISearchResponseData {
	documents: {
		ok: IDocumentCard
	}[]
	histograms: {
		data: {
			date: string
			value: number
		}[]
		histogramType: string
	}
}

export interface IDocumentCard {
	id: string
	attributes: {
		wordCount: number
	}
	content: {
		markup: string
	}
	title: {
		text: string
	}
	source: {
		name: string
	}
	url: string
	issueDate: string
}
