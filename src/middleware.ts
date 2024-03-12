import { NextRequest, NextResponse } from 'next/server'

import { SITE_PAGES } from './configs/pages-url.config'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request
	const accessToken = cookies.get('accessToken')?.value
	const isSearchPage = url.includes('/search')
	const isSearchResultsPage = url.includes('/search/results')
	const isAuthPage = url.includes('/auth')

	if (isAuthPage && accessToken) {
		return NextResponse.redirect(new URL(SITE_PAGES.HOME, url))
	}

	if (!accessToken && (isSearchPage || isSearchResultsPage)) {
		return NextResponse.redirect(new URL('/auth', url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/search', '/search/results', '/auth']
}
