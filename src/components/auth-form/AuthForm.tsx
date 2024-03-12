'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';



import { IAuthForm } from '@/types/auth.types';



import { Button } from '../ui/buttons/Button';
import { Input } from '../ui/inputs/Input';
import { Label } from '../ui/label';



import Facebook from '@/../../public/facebook.svg';
import Google from '@/../../public/google.svg';
import Yandex from '@/../../public/yandex.svg';
import { SITE_PAGES } from '@/configs/pages-url.config';
import { authService } from '@/services/auth.service';


const AuthForm = ({ type }: { type: 'login' | 'register' }) => {
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
		console.log(isDisabled)
	}, [isDisabled, loginValue, passwordValue])

	const onSubmit: SubmitHandler<IAuthForm> = async data => {
		const response = await authService.main(data)

		if (response.message) {
			setError('root', { message: response.message })
			return
		}
		clearErrors()
		push(SITE_PAGES.SEARCH)
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
					defaultValue={'sf_student1'}
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
					defaultValue={'4i2385j'}
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
					className={`w-full `}
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
				<button
					type='button'
					className={`flex justify-center items-center w-[96px] h-[31px] rounded-[3px] border border-light-blue hover:bg-light-blue/10`}
				>
					<Image
						src={Google}
						alt='google'
					/>
				</button>
				<button
					type='button'
					className={`flex justify-center items-center w-[96px] h-[31px] rounded-[3px] border border-light-blue hover:bg-light-blue/10`}
				>
					<Image
						src={Facebook}
						alt='google'
					/>
				</button>
				<button
					type='button'
					className={`flex justify-center items-center w-[96px] h-[31px] rounded-[3px] border border-light-blue hover:bg-light-blue/10`}
				>
					<Image
						src={Yandex}
						alt='google'
					/>
				</button>
			</div>
		</form>
	)
}

export default AuthForm