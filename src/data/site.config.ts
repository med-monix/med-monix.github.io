interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://medmonix.com', // Write here your website url
	author: 'Nadia Blostein', // Site author
	title: 'Medmonix', // Site title.
	description: 'A cervix helix of medical mnemonics', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this medmonic', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
