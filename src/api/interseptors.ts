import axios, { CreateAxiosDefaults } from 'axios';


import { getAccessToken } from '@/services/auth-token.service';



const options: CreateAxiosDefaults = {
	baseURL: process.env.SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	},
	// withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})


export { axiosClassic, axiosWithAuth }