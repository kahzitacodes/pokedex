import { Helmet } from 'react-helmet-async'
import { useLanguage } from '@/contexts/LanguageContext'
import { Home } from '@/widgets/home/Home'

export function HomePage() {
	const { language } = useLanguage()

	const pageTitle = 'Pokedex - Explore the World of Pokemon'
	const metaDescription =
		'Explore the first 151 Pokemon from the original generation. Search, filter, and discover detailed information about each Pokemon.'

	return (
		<>
			<Helmet>
				<html lang={language} />
				<title>{pageTitle}</title>
				<meta name='description' content={metaDescription} />
			</Helmet>
			<Home />
		</>
	)
}
