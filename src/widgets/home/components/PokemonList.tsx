import { Card, type CardDirection } from '@/components'
import { type Columns, Grid, type ResponsiveColumns } from '@/components/layout'
import type { Pokemon } from '@/types'
import type { ViewMode } from '@/types/listing'

export type PokemonListProps = {
	pokemons: Pokemon[]
	viewMode: ViewMode
	onPokemonClick?: (id: number) => void
}

export function PokemonList(props: PokemonListProps) {
	const { pokemons, onPokemonClick, viewMode } = props

	const gridConfig: Columns | ResponsiveColumns =
		viewMode === 'list'
			? 1
			: {
					xs: 1,
					sm: 2,
					md: 3,
					lg: 4,
					xl: 4,
					'2xl': 6,
				}
	const cardDirection: CardDirection =
		viewMode === 'list' ? 'horizontal' : 'vertical'

	return (
		<Grid className='py-4' columns={gridConfig}>
			{pokemons.map((pokemon) => (
				<Card
					direction={cardDirection}
					key={pokemon.id}
					recordId={pokemon.id}
					title={pokemon.displayName}
					image={pokemon.image}
					tags={pokemon.types.map((type) => ({
						color: type,
						label: type.charAt(0).toUpperCase() + type.slice(1),
					}))}
					onClick={() => onPokemonClick?.(pokemon.id)}
				/>
			))}
		</Grid>
	)
}
