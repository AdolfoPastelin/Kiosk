import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosClient } from "../config/axios"
import { useKiosk } from './useKiosk'
import useSWR from 'swr'

export const useAuth = ({ middleware, url }) => {
	const token = localStorage.getItem('AUTH_TOKEN')
	const navigate = useNavigate()
	const { handleClearOrder } = useKiosk()

	const { data: user, error, mutate } = useSWR('/api/user', () =>
		axiosClient.get('/api/user', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(res => res.data)
			.catch(error => {
				throw new Error(error?.response?.data?.errors)
			})
	)

	const register = async(userData, setErrors, toast, toastStyles) => {
		try {
			const response = await axiosClient.post('/api/register', userData)
			localStorage.setItem('AUTH_TOKEN', response.data.token)
			setErrors([])
			await mutate()
		} catch (error) {
			setErrors(Object.values(error.response.data.errors))
			toast.error("Failed to register account, ensure that you're entering the data correctly.", toastStyles)
			throw new Error('The following error has ocurred: ' + error)
		}
	}

	const login = async (userData, setErrors, toast, toastStyles) => {
		try {
			const response = await axiosClient.post('/api/login', userData)
			localStorage.setItem('AUTH_TOKEN', response.data.token)
			setErrors([])
			await mutate()
		} catch (error) {
			setErrors(Object.values(error.response.data.errors))
			toast.error("Failed to log in, ensure that you're entering the data correctly.", toastStyles)
			throw new Error('The following error has ocurred: ' + error)
		}
	}

	const logout = async () => {
		try {
			await axiosClient.post('/api/logout', null, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			localStorage.removeItem('AUTH_TOKEN')
			handleClearOrder()
			await mutate(undefined)
		} catch (error) {
			throw new Error(Object.values(error?.response?.data?.errors))
		}
	}

	useEffect(() => {
		if (middleware === 'guest' && url && user) {
			navigate(url)
		}

		if (middleware === 'guest' && user && user.admin) {
			navigate('/admin')
		}

		if (middleware === 'admin' && user && !user.admin) {
			navigate('/')
		}
		
		if(middleware === 'auth' && error) {
			navigate('/auth')
		}
	}, [user, error, middleware, url, navigate])

	return {
		register,
		login,
		logout,
		user,
		error
	}
}