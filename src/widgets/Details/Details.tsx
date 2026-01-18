import { TbArrowLeft } from 'react-icons/tb'
import {
	Badge,
	Button,
	Divider,
	EmptyState,
	Heading,
	StatBar,
	Text,
} from '@/components'
import { Container, Grid } from '@/components/layout'
import { formatPokemonNumber } from '@/utils'
import { usePokemonDetail } from '@/widgets/Details/hooks/usePokemonDetail'
import * as S from './components/Details.styled'
import { DetailsSkeleton } from './components/DetailsSkeleton'

export function Details({
	id,
	handleBack,
}: {
	id?: string
	handleBack: () => void
}) {
	const { pokemon, loading, error } = usePokemonDetail(id)

	if (error) {
		return (
			<Container className='pb-8'>
				<EmptyState
					title='Pokemon not found'
					description="We couldn't find the Pokemon you're looking for."
					action={
						<Button
							variant='secondary'
							iconStart={<TbArrowLeft />}
							onClick={handleBack}
						>
							Go back
						</Button>
					}
				/>
			</Container>
		)
	}

	if (loading || !pokemon) {
		return <DetailsSkeleton />
	}

	return (
		<Container className='pb-10'>
			<Grid
				columns={{
					xs: 1,
					md: 2,
				}}
				gap={{
					xs: 'var(--spacing-8)',
					md: 'var(--spacing-12)',
				}}
			>
				<div className='flex items-start justify-center'>
					<S.PokemonImage>
						<img src={pokemon.image} alt={pokemon.displayName} />
					</S.PokemonImage>
				</div>

				<div className='flex flex-col gap-6'>
					<div className='flex flex-col gap-1'>
						<Text weight='bold' color='secondary' size='lg'>
							#{formatPokemonNumber(pokemon.id)}
						</Text>
						<Heading size='h1' as='h1'>
							{pokemon.displayName}
						</Heading>
						{pokemon.genus && (
							<Text size='md' color='secondary'>
								{pokemon.genus}
							</Text>
						)}
					</div>

					<div className='flex flex-col gap-2'>
						<Text weight='semibold' size='sm' color='secondary'>
							Type
						</Text>
						<div className='flex gap-2 flex-wrap'>
							{pokemon.types.map((type) => (
								<Badge key={type} color={type} label={type} />
							))}
						</div>
					</div>

					{pokemon.description && (
						<div className='flex flex-col gap-2'>
							<Text weight='semibold' size='sm' color='secondary'>
								Description
							</Text>
							<Text size='md'>{pokemon.description}</Text>
						</div>
					)}

					<Divider />
					<div className='flex flex-col gap-2'>
						<Text weight='semibold' size='sm' color='secondary'>
							Physical
						</Text>
						<Grid columns={2}>
							<div className='flex flex-col gap-0_5'>
								<Text weight='bold' size='lg'>
									{(pokemon.height / 10).toFixed(1)}m
								</Text>
								<Text size='sm' color='secondary'>
									Height
								</Text>
							</div>
							<div className='flex flex-col gap-0_5'>
								<Text weight='bold' size='lg'>
									{(pokemon.weight / 10).toFixed(1)}kg
								</Text>
								<Text size='sm' color='secondary'>
									Weight
								</Text>
							</div>
						</Grid>
					</div>
					<Divider />

					<div className='flex flex-col gap-3'>
						<Text weight='semibold' size='sm' color='secondary'>
							Base Stats
						</Text>
						<div className='flex flex-col gap-4'>
							<StatBar label='HP' value={pokemon.stats.hp} />
							<StatBar label='Attack' value={pokemon.stats.attack} />
							<StatBar label='Defense' value={pokemon.stats.defense} />
							<StatBar label='Sp. Atk' value={pokemon.stats.specialAttack} />
							<StatBar label='Sp. Def' value={pokemon.stats.specialDefense} />
							<StatBar label='Speed' value={pokemon.stats.speed} />
						</div>
					</div>

					<div className='flex flex-col gap-2'>
						<Text weight='semibold' size='sm' color='secondary'>
							Abilities
						</Text>
						<div className='flex flex-col gap-2'>
							{pokemon.abilities.map((ability) => (
								<div
									key={ability.name}
									className='flex items-center gap-2 capitalize'
								>
									<Text size='md' weight='medium'>
										{ability.name.replace(/-/g, ' ')}
									</Text>
									{ability.isHidden && (
										<Text size='xs' color='secondary'>
											(Hidden)
										</Text>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</Grid>
		</Container>
	)
}
