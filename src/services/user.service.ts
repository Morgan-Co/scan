import { axiosWithAuth } from '@/api/interseptors'

class UserService {
	async getProfile() {
		const response = await axiosWithAuth.get('/api/v1/account/info')
		return response.data
	}
}

export const userService = new UserService()
