import { Helmet } from 'react-helmet-async'
import { TbArrowLeft } from 'react-icons/tb'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '@/components'
import { Container } from '@/components/layout'
import { useLanguage } from '@/contexts/LanguageContext'
import { Details } from '@/widgets/Details/Details'
import { usePokemonDetail } from '@/widgets/Details/hooks/usePokemonDetail'

export function DetailsPage() {
	const { id } = useParams<{
		id: string
	}>()
	const navigate = useNavigate()
	const { language } = useLanguage()
	const { pokemon } = usePokemonDetail(id)

	const handleBack = () => navigate('/')

	const pageTitle = pokemon?.displayName
		? `${pokemon.displayName} - Pokedex`
		: 'Pokedex - Explore the World of Pokemon'

	const metaDescription = pokemon?.description
		? pokemon.description
		: pokemon?.displayName
			? `Discover ${pokemon.displayName} and learn about its stats, abilities, and more in the Pokedex.`
			: 'Explore the first 151 Pokemon from the original generation. Search, filter, and discover detailed information about each Pokemon.'

	return (
		<>
			<Helmet>
				<html lang={language} />
				<title>{pageTitle}</title>
				<meta name='description' content={metaDescription} />
			</Helmet>
			<div className='flex items-center'>
				<Container className='py-8 flex'>
					<Button
						variant='secondary'
						iconStart={<TbArrowLeft />}
						onClick={handleBack}
					>
						Back to list
					</Button>
				</Container>
			</div>
			<Details id={id} handleBack={handleBack} />
		</>
	)
}
