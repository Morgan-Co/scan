import { ISearchRequest } from '@/types/search.types'


export interface ISearchTerm {
	title: string
	formId: keyof ISearchRequest
}

export const searchTerms: ISearchTerm[] = [
	{
		title: 'Признак максимальной полноты',
		formId: 'maxFullness'
	},
	{
		title: 'Упоминания в бизнес-контексте',
		formId: 'inBusinessNews'
	},
	{
		title: 'Главная роль в публикации',
		formId: 'onlyMainRole'
	},
	{
		title: 'Публикации только с риск-факторами',
		formId: 'onlyWithRiskFactors'
	},
	{
		title: 'Включать технические новости рынков',
		formId: 'includeTechNews'
	},
	{
		title: 'Включать анонсы и календари',
		formId: 'includeAnnouncements'
	},
	{
		title: 'Включать сводки новостей',
		formId: 'includeDigests'
	}
]
