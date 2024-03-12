class SITE {
	private root = '/'

	HOME = this.root
	SEARCH = `${this.root}search`
	RESULTS = `${this.root}search/results`
	AUTH = `${this.root}auth`
}

export const SITE_PAGES = new SITE()