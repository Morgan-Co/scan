import { IAuthForm } from '@/types/auth.types'

import { axiosClassic } from '@/api/interseptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

class AuthService {
	// BASE_URL = 'gateway.scan-interfax.ru'
	async main(data: IAuthForm) {
		try {
			const response = await axiosClassic.post(
				`/api/v1/account/login`,
				data
			)
			console.log(response);
			

			if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
			return response.data
		} catch (error: any) {
			if (error.response) {
				return error.response.data
			}
		}
	}
	// async getNewTokens() {
	// 	const response = await axiosClassic.post('/auth/login/access-token')

	// 	if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

	// 	return response.data
	// }

	// async logout() {
	// 	const response = await axiosClassic.post<boolean>('/auth/logout')

	// 	if (response.data) removeFromStorage()

	// 	return response.data
	// }
}

export const authService = new AuthService()
