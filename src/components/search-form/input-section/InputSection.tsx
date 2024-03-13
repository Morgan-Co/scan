import { useEffect, useState } from 'react'
import {
	FieldErrors,
	UseFormRegister,
	UseFormSetError,
	UseFormSetValue,
	UseFormWatch
} from 'react-hook-form'

import RangeDate from '@/components/range-date/RangeDate'
import { Button } from '@/components/ui/buttons/Button'
import { Input } from '@/components/ui/inputs/Input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'

import { ISearchRequest } from '@/types/search.types'

import { cn, validateInn } from '@/lib/utils'

const InputSection = ({
	register,
	setValue,
	errors,
	setError,
	watch
}: {
	register: UseFormRegister<ISearchRequest>
	setValue: UseFormSetValue<ISearchRequest>
	errors: FieldErrors<ISearchRequest>
	setError: UseFormSetError<ISearchRequest>
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
		<div>
			<div className={`mb-[30px] relative`}>
				<Label
					htmlFor='inn'
					variant={'search'}
					className={`text-[14px] sm:text-[18px] mb-[10px]`}
				>
					ИНН компании*
				</Label>
				<Input
					id='inn'
					className={`placeholder:text-center sm:max-w-[242px]`}
					placeholder='10 цифр'
					error={errors.inn && true}
					{...register('inn', {
						required: {
							message: 'Обязательное поле',
							value: true
						}
					})}
					onChange={e => {
						const myErrors = { code: 0, message: '' }
						validateInn(e.target.value, myErrors)
						setError('inn', { message: myErrors.message })
						console.log(myErrors)
					}}
				/>
				<span
					className={`absolute sm:top-[95px] top-[80px] text-[14px] text-red sm:left-[15%] left-[30%] flex justify-center`}
				>
					{errors.inn?.message}
				</span>
			</div>
			<div className={`mb-[21px]`}>
				<Label
					htmlFor='tonality'
					variant={'search'}
					className={`text-[14px] sm:text-[18px] mb-[10px]`}
				>
					Тональность
				</Label>
				<Select
					defaultValue='any'
					onValueChange={(value: string) => {
						setValue('tonality', value)
					}}
				>
					<SelectTrigger
						className={`sm:max-w-[242px]`}
						id='tonality'
					>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='any'>Любая</SelectItem>
						<SelectItem value='exact'>Точная</SelectItem>
						<SelectItem value='different'>Разная</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className={`mb-[30px] relative`}>
				<Label
					htmlFor='docs-count'
					variant={'search'}
					className={`text-[14px] sm:text-[18px] mb-[10px]`}
				>
					Количество документов в выдаче*
				</Label>
				<Input
					id='docs-count'
					className={`placeholder:text-center sm:max-w-[242px]`}
					placeholder='От 1 до 1000'
					{...register('limit', {
						required: {
							value: true,
							message: 'Обязательное поле'
						}
					})}
					error={errors.limit && true}
				/>
				<span
					className={`absolute sm:top-[95px] top-[80px] text-[14px] text-red sm:left-[15%] left-[30%] flex justify-center`}
				>
					{errors.limit?.message}
				</span>
			</div>
			<div className={cn('grid gap-2')}>
				<Label variant={'search'} className={`text-[14px] sm:text-[18px] mb-[10px]`}>
					Диапазон поиска*
				</Label>
				<RangeDate setValue={setValue} />
			</div>
			<Button
				type='submit'
				className={`justify-self-end self-end sm:hidden block mt-[24px]`}
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

export default InputSection
