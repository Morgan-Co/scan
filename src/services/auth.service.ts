import { IAuthForm } from '@/types/auth.types'

import { axiosClassic } from '@/api/interseptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

class AuthService {
	async login(data: IAuthForm) {
		try {
			const response = await axiosClassic.post(`/api/v1/account/login`, data)

			if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
			return response.data
		} catch (error: any) {
			if (error.response) {
				return error.response.data
			}
		}
	}
}

export const authService = new AuthService()
