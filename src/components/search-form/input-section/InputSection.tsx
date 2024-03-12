import {
	FieldErrors,
	UseFormRegister,
	UseFormSetError,
	UseFormSetValue
} from 'react-hook-form'

import RangeDate from '@/components/range-date/RangeDate'
import { Input } from '@/components/ui/inputs/Input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'


import { cn, validateInn } from '@/lib/utils'
import { ISearchRequest } from '@/types/search.types'

const InputSection = ({
	register,
	setValue,
	errors,
	setError
}: {
	register: UseFormRegister<ISearchRequest>
	setValue: UseFormSetValue<ISearchRequest>
	errors: FieldErrors<ISearchRequest>
	setError: UseFormSetError<ISearchRequest>
}) => {
	return (
		<div>
			<div className={`mb-[30px] relative`}>
				<Label
					htmlFor='inn'
					variant={'search'}
				>
					ИНН компании*
				</Label>
				<Input
					id='inn'
					className={`placeholder:text-center max-w-[242px]`}
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
					className={`absolute top-[95px] text-[14px] text-red left-[15%] flex justify-center`}
				>
					{errors.inn?.message}
				</span>
			</div>
			<div className={`mb-[21px]`}>
				<Label
					htmlFor='tonality'
					variant={'search'}
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
						className={`max-w-[242px]`}
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
				>
					Количество документов в выдаче*
				</Label>
				<Input
					id='docs-count'
					className={`placeholder:text-center max-w-[242px]`}
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
					className={`absolute top-[95px] text-[14px] text-red left-[15%] flex justify-center`}
				>
					{errors.limit?.message}
				</span>
			</div>
			<div className={cn('grid gap-2')}>
				<Label>Диапазон поиска</Label>
				<RangeDate setValue={setValue} />
			</div>
		</div>
	)
}

export default InputSection
