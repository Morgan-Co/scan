'use client'

import { format, isAfter, isBefore, isValid, parse } from 'date-fns'
import React, { ChangeEventHandler, useEffect, useState } from 'react'
import { DateRange, DayPicker, SelectRangeEventHandler } from 'react-day-picker'
import styles from 'react-day-picker/dist/style.module.css'
import { UseFormSetValue } from 'react-hook-form'

import { ISearchRequest } from '@/types/search.types'

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

const RangeDate = ({
	setValue
}: {
	setValue: UseFormSetValue<ISearchRequest>
}) => {
	const [selectedRange, setSelectedRange] = useState<DateRange>()
	const [fromValue, setFromValue] = useState<string>('')
	const [toValue, setToValue] = useState<string>('')

	useEffect(() => {
		setValue('startDate', selectedRange?.from!)
		setValue('endDate', selectedRange?.to!)
	}, [setValue, selectedRange])

	const handleFromChange: ChangeEventHandler<HTMLInputElement> = e => {
		setFromValue(e.target.value)
		const date = parse(e.target.value, 'y-MM-dd', new Date())
		if (!isValid(date)) {
			return setSelectedRange({ from: undefined, to: undefined })
		}
		if (selectedRange?.to && isAfter(date, selectedRange.to)) {
			setSelectedRange({ from: selectedRange.to, to: date })
		} else {
			setSelectedRange({ from: date, to: selectedRange?.to })
		}
	}

	const handleToChange: ChangeEventHandler<HTMLInputElement> = e => {
		const date = parse(e.target.value, 'y-MM-dd', new Date())

		if (!isValid(date)) {
			return setSelectedRange({ from: selectedRange?.from, to: undefined })
		}
		if (selectedRange?.from && isBefore(date, selectedRange.from)) {
			setSelectedRange({ from: date, to: selectedRange.from })
		} else {
			setSelectedRange({ from: selectedRange?.from, to: date })
		}
	}

	const handleRangeSelect: SelectRangeEventHandler = (
		range: DateRange | undefined
	) => {
		setSelectedRange(range)
		if (range?.from) {
			setFromValue(format(range.from, 'dd.MM.y'))
		} else {
			setFromValue('')
		}
		if (range?.to) {
			setToValue(format(range.to, 'dd.MM.y'))
		} else {
			setToValue('')
		}
	}

	return (
		<>
			<Popover>
				<PopoverTrigger asChild>
					<div className={`flex gap-[20px] flex-wrap`}>
						<input
							type='text'
							placeholder='Дата начала'
							value={fromValue}
							onChange={handleFromChange}
							className={`flex h-[43px] sm:max-w-[176px] w-full rounded-[5px] border-[2px] border-[#C7C7C7] py-[12px] px-[19px] text-base`}
						/>
						<input
							type='text'
							placeholder='Дата конца'
							value={toValue}
							onChange={handleToChange}
							className={`flex h-[43px] sm:max-w-[176px] w-full rounded-[5px] border-[2px] border-[#C7C7C7] py-[12px] px-[19px] text-base`}
						/>
					</div>
				</PopoverTrigger>
				<PopoverContent
					className='w-auto p-0'
					align='start'
				>
					<DayPicker
						mode='range'
						selected={selectedRange}
						classNames={styles}
						onSelect={handleRangeSelect}
					/>
				</PopoverContent>
			</Popover>
		</>
	)
}

export default RangeDate
