import type { PaginationResult, Pokemon } from '@/types'

export function paginatePokemon(
	pokemon: Pokemon[],
	page: number,
	itemsPerPage = 12,
): PaginationResult<Pokemon> {
	const totalPages = Math.ceil(pokemon.length / itemsPerPage)
	const currentPage = Math.max(1, Math.min(page, totalPages || 1))
	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = Math.min(startIndex + itemsPerPage, pokemon.length)
	const items = pokemon.slice(startIndex, endIndex)

	return {
		items,
		totalPages,
		currentPage,
		totalItems: pokemon.length,
		startIndex,
		endIndex,
	}
}
