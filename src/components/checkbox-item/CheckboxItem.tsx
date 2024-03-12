import { CheckedState } from '@radix-ui/react-checkbox'
import React, { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'

import { ISearchTerm } from '@/constants/search-terms.constants'


import { Checkbox } from '../ui/checkbox'
import { ISearchRequest } from '@/types/search.types'
const CheckboxItem = ({
	item,
	setValue
}: {
	item: ISearchTerm
	setValue: UseFormSetValue<ISearchRequest>
}) => {
	const [isChecked, setIsChecked] = useState<CheckedState>(false)
	return (
		<div className={`flex items-center mb-[15px] last:mb-0`}>
			<Checkbox
				id={item.title}
				className={`mr-[17px]`}
				onCheckedChange={e => {
					setValue(item.formId, e)

					setIsChecked(e)
				}}
			/>
			<label
				htmlFor={item.title}
				className={`text-lg ${isChecked ? 'text-black' : 'text-gray'}`}
			>
				{item.title}
			</label>
		</div>
	)
}

export default CheckboxItem
