'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ISearchRequest } from '@/types/search.types'

import CheckboxSection from './checkbox-section/CheckboxSection'
import InputSection from './input-section/InputSection'
import { SITE_PAGES } from '@/configs/pages-url.config'
import { searchService } from '@/services/search.service'

const SearchForm = () => {
	const { push } = useRouter()
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
		watch,
		setError
	} = useForm<ISearchRequest>({ mode: 'onBlur' })
	const { mutate } = useMutation({
		mutationKey: ['search-data'],
		mutationFn: async (queryData: ISearchRequest) => {
			const response = await searchService.makeRequest(queryData)
			localStorage.setItem('responseData', JSON.stringify(response))
			console.log(response)
		},
		onSuccess: () => {
			push(SITE_PAGES.RESULTS)
		}
	})

	const onSubmit: SubmitHandler<ISearchRequest> = async data => {
		if (!data.tonality) data.tonality = 'any'
		mutate(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`flex justify-between  w-[872px] h-[543px] rounded-[10px] shadow-main mt-[47px] box-border p-[21px_39px_32px_44px] z-10 relative bg-white`}
		>
			<InputSection
				register={register}
				setValue={setValue}
				errors={errors}
				setError={setError}
			/>
			<CheckboxSection
				setValue={setValue}
				watch={watch}
			/>
		</form>
	)
}

export default SearchForm
