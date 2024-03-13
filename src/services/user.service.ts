import { axiosWithAuth } from '@/api/interseptors'

class UserService {
	async getProfile() {
		try {
			const response = await axiosWithAuth.get('/api/v1/account/info')
			return { data: response.data }
		} catch (error) {
			return { error }
		}
	}
}

export const userService = new UserService()
