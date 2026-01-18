import { TbPokeball } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { Button, EmptyState, Pagination } from '@/components'
import { Container } from '@/components/layout'
import { ListOptions } from './components/ListOptions'
import { ListSearch } from './components/ListSearch'
import { PokemonList } from './components/PokemonList'
import { ListSkeleton } from './components/skeletons/ListSkeleton'
import { usePokemonFilters } from './hooks/usePokemonFilters'
import { usePokemonList } from './hooks/usePokemonList'

export function Home() {
	const navigate = useNavigate()
	const { pokemonList, loadingList } = usePokemonList()

	const {
		searchQuery,
		handleSearch,
		sortBy,
		handleSortBy,
		viewMode,
		handleViewMode,
		handlePageChange,
		result,
	} = usePokemonFilters(pokemonList)

	const handleSurpriseMe = () => {
		if (pokemonList.length === 0) return
		const randomIndex = Math.floor(Math.random() * pokemonList.length)
		const randomPokemon = pokemonList[randomIndex]
		navigate(`/details/${randomPokemon.id}`)
	}

	const renderContent = () => {
		if (loadingList) return <ListSkeleton viewMode={viewMode} />

		if (result.items.length === 0) {
			return (
				<EmptyState
					icon={<TbPokeball />}
					title='No Pokemon found'
					description="We couldn't find any Pokemon matching your search. Try a different term."
					action={
						searchQuery ? (
							<Button variant='secondary' onClick={() => handleSearch('')}>
								Clear search
							</Button>
						) : undefined
					}
				/>
			)
		}

		return (
			<>
				<PokemonList
					viewMode={viewMode}
					pokemons={result.items}
					onPokemonClick={(id) => navigate(`/details/${id}`)}
				/>
				<Pagination
					currentPage={result.currentPage}
					totalPages={result.totalPages}
					totalItems={result.totalItems}
					onPageChange={handlePageChange}
				/>
			</>
		)
	}

	return (
		<div className='flex flex-col gap-10 pb-4'>
			<ListSearch onSearch={handleSearch} onSurpriseMe={handleSurpriseMe} />
			<Container className='flex flex-col'>
				<ListOptions
					sortBy={sortBy}
					onSortChange={handleSortBy}
					viewMode={viewMode}
					onViewModeChange={handleViewMode}
				/>
				{renderContent()}
			</Container>
		</div>
	)
}
