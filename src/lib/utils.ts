import { type ClassValue, clsx } from 'clsx'
import { decode } from 'html-entities'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function validateInn(
	inn: number | string,
	error: { code: number; message: string }
) {
	var result = false
	if (typeof inn === 'number') {
		inn = inn.toString()
	} else if (typeof inn !== 'string') {
		inn = ''
	}
	if (!inn.length) {
		error.code = 1
		error.message = 'ИНН пуст'
	} else if (/[^0-9]/.test(inn)) {
		error.code = 2
		error.message = 'ИНН может состоять только из цифр'
	} else if ([10, 12].indexOf(inn.length) === -1) {
		error.code = 3
		error.message = 'ИНН может состоять только из 10 или 12 цифр'
	} else {
		var checkDigit = function (inn: any, coefficients: number[]) {
			var n = 0
			for (var i in coefficients) {
				n += coefficients[i] * inn[i]
			}
			return parseInt(((n % 11) % 10).toString())
		}
		switch (inn.length) {
			case 10:
				var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8])
				if (n10 === parseInt(inn[9])) {
					result = true
				}
				break
			case 12:
				var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8])
				var n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8])
				if (n11 === parseInt(inn[10]) && n12 === parseInt(inn[11])) {
					result = true
				}
				break
		}
		if (!result) {
			error.code = 4
			error.message = 'Неправильное контрольное число'
		}
	}
	return result
}

const decodeMarkup = (markup: string) => {
	return decode(markup)
}

const removeTags = (content: string) => {
	return content.replace(/<.*?>/g, ' ')
}

export const getContent = (markup: string) => {
	const decodedContent = decodeMarkup(markup)
	const content = removeTags(decodedContent).slice(0, 700) + '...'

	return { content }
}
