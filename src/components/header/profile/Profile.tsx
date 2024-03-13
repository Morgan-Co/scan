'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { IProfile } from '@/types/auth.types'

import UserImage from '../../../../public/user_image.png'

import { SITE_PAGES } from '@/configs/pages-url.config'
import { removeFromStorage } from '@/services/auth-token.service'
import { userService } from '@/services/user.service'

const Profile = () => {
	const { push } = useRouter()
	const client = useQueryClient()

	const { data: profile } = useQuery({
		queryKey: ['user-profile'],
		queryFn: () => userService.getProfile()
	}) as { data: IProfile }

	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => removeFromStorage(),
		onSuccess: () => {
			client.invalidateQueries({
				queryKey: ['user-profile']
			})
		}
	})
	if (!profile?.data) {
		return (
			<div
				className={
					'flex items-center sm:flex-row flex-col gap-[20.5px] sm:gap-0'
				}
			>
				<Link
					href={'/auth'}
					className={`sm:text-[#999999] text-[14px] leading-[17px] sm:hover:text-black/60 transition text-[#67bfbd] hover:text-secondary-turquoise`}
				>
					Зарегистрироваться
				</Link>
				<span
					className={`w-[2px] h-[26px] bg-primary-turquoise sm:block mx-[20px] hidden`}
				></span>
				<Link
					href={'/auth'}
					className={`sm:text-[14px] text-black leading-[17px] sm:p-[4px_10px_5px_12px] p-0 bg-secondary-turquoise rounded-[5px] hover:bg-secondary-turquoise text-base w-[295px] h-[52px] flex justify-center items-center sm:inline sm:w-fit sm:h-fit`}
				>
					Войти
				</Link>
			</div>
		)
	}
	return (
		<>
			<div className={`sm:flex w-[414px] justify-between hidden`}>
				<div
					className={`flex flex-col justify-center items-end w-[175px] h-[63px] pr-[8px] bg-[#f4f4f4] rounded-[5px]`}
				>
					<div className={`flex gap-[6px]`}>
						<span className={`text-[10px] text-gray flex items-center`}>
							Использовано компаний
						</span>
						<span className={`text-[14px] font-bold`}>
							{profile.data.eventFiltersInfo.usedCompanyCount}
						</span>
					</div>
					<div className={`flex gap-[6px]`}>
						<span className={`text-[10px] text-gray flex items-center`}>
							Лимит по компаниям
						</span>
						<span className={`text-[14px] text-green font-bold`}>
							{profile.data.eventFiltersInfo.companyLimit}
						</span>
					</div>
				</div>
				<div className={`flex gap-[3px]`}>
					<div className={`flex flex-col items-end`}>
						<span className={`text-[14px] text-[#4d4d4d]`}>Алексей А.</span>
						<button
							onClick={() => {
								logout()
								push(SITE_PAGES.HOME)
							}}
							className={`text-[10px] text-gray`}
						>
							Выйти
						</button>
					</div>
					<Image
						src={UserImage}
						alt='User Image'
						className={`w-[32px] h-[32px]`}
					/>
				</div>
			</div>
		</>
	)
}

export default Profile
