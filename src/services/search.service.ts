import axios from 'axios'
import { formatISO } from 'date-fns'

import { ISearchRequest, ISearchRequestData } from '@/types/search.types'

import { axiosWithAuth } from '@/api/interseptors'

export const removeNonDigit = (value: string) => value.replace(/\D/g, '')

class SearchService {
	BASE_URL = 'gateway.scan-interfax.ru'

	async makeRequest(data: ISearchRequest) {
		console.log(data);
		
		const request: ISearchRequestData = {
			intervalType: 'month',
			histogramTypes: ['totalDocuments', 'riskFactors'],
			issueDateInterval: {
				startDate: formatISO(data.startDate),
				endDate: formatISO(data.endDate)
			},
			searchContext: {
				targetSearchEntitiesContext: {
					targetSearchEntities: [
						{
							type: 'company',
							inn: data.inn,
							maxFullness: data.maxFullness === true,
							inBusinessNews: data.inBusinessNews === true
						}
					],
					onlyMainRole: data.onlyMainRole === true,
					tonality: data.tonality,
					onlyWithRiskFactors: data.onlyWithRiskFactors === true
				}
			},
			similarMode: 'duplicates',
			limit: parseInt(data.limit),
			sortType: 'sourceInfluence',
			sortDirectionType: 'desc',
			attributeFilters: {
				excludeTechNews: data.includeTechNews === true,
				excludeAnnouncements: data.includeAnnouncements === true,
				excludeDigests: data.includeDigests === true
			}
		}
		console.log(request)

		const histograms = await axiosWithAuth.post(
			`/api/v1/objectsearch/histograms`,
			request
		)

		const objectSearch: { data: { items: { encodedId: string }[] } } =
			await axiosWithAuth.post('/api/v1/objectsearch', request)

		const objectSearchIds: any[] = []
		objectSearch.data.items.map(item => {
			objectSearchIds.push(item.encodedId)
		})

		const documents = await axiosWithAuth.post('/api/v1/documents', {
			ids: objectSearchIds
		})

		return { histograms: histograms.data.data, documents: documents.data }
	}
}
export const searchService = new SearchService()
