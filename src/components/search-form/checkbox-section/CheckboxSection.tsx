import { useEffect, useState } from 'react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

import CheckboxItem from '@/components/checkbox-item/CheckboxItem'
import { Button } from '@/components/ui/buttons/Button'

import { searchTerms } from '@/constants/search-terms.constants'

import { ISearchRequest } from '@/types/search.types'

const CheckboxSection = ({
	setValue,
	watch
}: {
	setValue: UseFormSetValue<ISearchRequest>
	watch: UseFormWatch<ISearchRequest>
}) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(false)
	const limitValue = watch('limit')
	const innValue = watch('inn')

	useEffect(() => {
		setIsDisabled(() => {
			if (limitValue?.length > 0 && innValue?.length > 0) {
				return false
			}
			return true
		})
	}, [isDisabled, innValue, limitValue])
	return (
		<div className={`grid grid-rows-[auto_auto_35px]`}>
			<div>
				{searchTerms.map(item => (
					<CheckboxItem
						key={item.title}
						item={item}
						setValue={setValue}
					/>
				))}
			</div>

			<Button
				type='submit'
				className={`justify-self-end self-end`}
				disabled={isDisabled}
			>
				Поиск
			</Button>
			<div className={`text-[14px] text-gray mt-[10px] ml-[50px]`}>
				* Обязательные к заполнению поля
			</div>
		</div>
	)
}

export default CheckboxSection
