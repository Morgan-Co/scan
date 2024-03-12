'use client'

import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'


import CheckboxSection from './checkbox-section/CheckboxSection'
import InputSection from './input-section/InputSection'
import { searchService } from '@/services/search.service'
import { ISearchRequest } from '@/types/search.types'

const SearchForm = () => {
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
