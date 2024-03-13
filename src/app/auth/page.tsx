import Image from 'next/image'

import AuthForm from '@/components/auth-form/AuthForm'
import Heading from '@/components/ui/headings/Heading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import AuthImage from '../../../public/auth_image.png'
import Lock from '../../../public/lock.png'

export default function Auth() {
	return (
		<section className={`flex sm:flex-nowrap flex-wrap mt-[69px] mb-[80px]`}>
			<div>
				<Heading
					className={`max-w-[817px] text-[22px] sm:text-[40px] leading-[30px] tracking-[2px] sm:leading-[48px] mb-[45px] sm:mb-0`}
				>
					Для оформления подписки на тариф, необходимо авторизоваться.
				</Heading>
				<Image
					src={AuthImage}
					alt='Characters'
					className={`ml-[112px] mt-[13px] sm:block hidden`}
				/>
			</div>
			<Tabs
				defaultValue='login'
				className={`rounded-[10px] shadow-main p-[25px_25px_25px_39px] bg-white relative box-border max-w-[429px] w-full`}
			>
				<TabsList className={`w-full flex mb-[40px] gap-[15px]`}>
						<TabsTrigger
							value='login'
							className={`max-w-[151px] w-full`}
						>
							Войти
						</TabsTrigger>
						<TabsTrigger
							value='auth'
							className={`max-w-[213px] w-full`}
						>
							Зарегистрироваться
						</TabsTrigger>
					</TabsList>
					<TabsContent value='login'>
						<AuthForm type='login' />
					</TabsContent>
					<TabsContent value='auth'>
						<AuthForm type='register' />
					</TabsContent>
					<Image
						src={Lock}
						alt='Lock'
						className={`absolute -top-14 -left-14 sm:block hidden`}
					/>
			</Tabs>
		</section>
	)
}
