import type { PaginationResult, Pokemon, SortOption } from '@/types'
import { paginatePokemon } from './pagination'
import { searchPokemon, sortPokemon } from './search-and-sort'

export function processPokemonList(
	pokemon: Pokemon[],
	options: {
		searchQuery?: string
		sortBy?: SortOption
		page?: number
		itemsPerPage?: number
	},
): PaginationResult<Pokemon> {
	let processed = pokemon

	if (options.searchQuery) {
		processed = searchPokemon(processed, options.searchQuery)
	}

	if (options.sortBy) {
		processed = sortPokemon(processed, options.sortBy)
	}

	return paginatePokemon(
		processed,
		options.page ?? 1,
		options.itemsPerPage ?? 12,
	)
}
