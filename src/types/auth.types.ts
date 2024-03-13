export interface IAuthForm {
	login: string
	password: string
}

export type IProfile = {
	data: {
		eventFiltersInfo: {
			usedCompanyCount: number
			companyLimit: number
		}
	}
}
