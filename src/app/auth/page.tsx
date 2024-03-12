import Image from 'next/image'

import AuthForm from '@/components/auth-form/AuthForm'
import Heading from '@/components/ui/headings/Heading'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import AuthImage from '../../../public/auth_image.png'
import Lock from '../../../public/lock.png'

export default function Auth() {
	return (
		<section className={`flex mt-[69px] mb-[80px]`}>
			<div>
				<Heading className={`max-w-[817px]`}>
					Для оформления подписки на тариф, необходимо авторизоваться.
				</Heading>
				<Image
					src={AuthImage}
					alt='Characters'
					className={`ml-[112px] mt-[13px]`}
				/>
			</div>
			<div>
				<Tabs
					defaultValue='login'
					className={`w-[429px] h-[523px] rounded-[10px] shadow-main px-[25px] pt-[25px] bg-white relative`}
				>
					<TabsList className={`w-full flex justify-between mb-[40px]`}>
						<TabsTrigger
							value='login'
							className={`w-[151px]`}
						>
							Войти
						</TabsTrigger>
						<TabsTrigger
							value='auth'
							className={`w-[213px]`}
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
						className={`absolute -top-14 -left-14`}
					/>
				</Tabs>
			</div>
		</section>
	)
}
