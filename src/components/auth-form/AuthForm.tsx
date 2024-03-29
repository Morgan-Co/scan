'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { socials } from '@/constants/socials.constants'

import { IAuthForm } from '@/types/auth.types'

import { Button } from '../ui/buttons/Button'
import { Input } from '../ui/inputs/Input'
import { Label } from '../ui/label'

import Facebook from '@/../../public/facebook.svg'
import Google from '@/../../public/google.svg'
import Yandex from '@/../../public/yandex.svg'
import { SITE_PAGES } from '@/configs/pages-url.config'
import { authService } from '@/services/auth.service'

const AuthForm = ({ type }: { type: 'login' | 'register' }) => {
	const client = useQueryClient()
	const { mutate: login } = useMutation({
		mutationKey: ['login'],
		mutationFn: async (data: IAuthForm) => {
			const response = await authService.login(data)
			if (response.message) {
				setError('root', { message: response.message })
				return
			}
			clearErrors()
		},
		onSuccess: () => {
			push(SITE_PAGES.SEARCH)
			client.invalidateQueries({
				queryKey: ['user-profile']
			})
		}
	})
	const [isDisabled, setIsDisabled] = useState(false)
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		watch,
		clearErrors
	} = useForm<IAuthForm>({
		mode: 'onBlur'
	})
	const loginValue = watch('login')
	const passwordValue = watch('password')

	useEffect(() => {
		setIsDisabled(() => {
			if (loginValue?.length > 0 && passwordValue?.length > 0) {
				return false
			}
			return true
		})
	}, [isDisabled, loginValue, passwordValue])

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		login(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={`mb-[20px] relative`}>
				<Label>Логин или номер телефона:</Label>
				<Input
					id='login'
					error={errors.login && true}
					{...register('login', {
						required: {
							message: 'Введите логин',
							value: true
						}
					})}
					defaultValue={'sf_student2'}
				/>
				<span
					className={`absolute top-[77px] text-[14px] text-red w-full flex justify-center`}
				>
					{errors.login?.message}
				</span>
			</div>
			<div className={`mb-[30px] relative`}>
				<Label>Пароль:</Label>
				<Input
					id='password'
					type='password'
					error={errors.password && true}
					{...register('password', {
						required: {
							message: 'Введите пароль',
							value: true
						}
					})}
					defaultValue={'lV8xjCH'}
				/>
				<span
					className={`absolute top-[80px] text-[14px] text-red w-full flex justify-center`}
				>
					{errors.password?.message}
				</span>
			</div>
			<div className={`relative mb-[20px]`}>
				<Button
					disabled={isDisabled}
					className={`w-full`}
				>
					{type === 'login' ? 'Войти' : 'Создать'}
				</Button>
				<span
					className={`absolute top-[58px] text-[14px] text-red w-full flex justify-center`}
				>
					{errors.root?.message}
				</span>
			</div>
			<Link
				href={'/'}
				className={`text-blue text-[14px] leading-[17px] underline hover:no-underline flex justify-center mb-[30px]`}
			>
				Восстановить пароль
			</Link>
			<span className={`text-base text-gray block mb-[15px]`}>
				Войти через:
			</span>
			<div className={`flex gap-[10px]`}>
				{socials.map(item => (
					<button
						key={item.url}
						type='button'
						className={`flex justify-center items-center max-w-[96px] w-full h-[31px] rounded-[3px] border border-light-blue hover:bg-light-blue/10`}
					>
						<Image
							src={item.img}
							alt={item.url}
						/>
					</button>
				))}
			</div>
		</form>
	)
}

export default AuthForm
