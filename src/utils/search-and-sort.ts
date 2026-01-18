import { SortOptions } from '@/constants'
import type { Pokemon, SortOption } from '@/types/pokemon'

export function searchPokemon(pokemon: Pokemon[], query: string): Pokemon[] {
	if (!query.trim()) return pokemon

	const normalizedQuery = query.toLowerCase().trim().replace(/^#/, '')

	return pokemon.filter((p) => {
		const matchesName = p.name.toLowerCase().includes(normalizedQuery)

		const numericQuery = Number.parseInt(normalizedQuery, 10)
		const matchesNumber =
			p.number.includes(normalizedQuery) ||
			p.id.toString().includes(normalizedQuery) ||
			(!Number.isNaN(numericQuery) && p.id === numericQuery)

		return matchesName || matchesNumber
	})
}

export function sortPokemon(pokemon: Pokemon[], sortBy: SortOption): Pokemon[] {
	const sorted = [
		...pokemon,
	]

	switch (sortBy) {
		case SortOptions.NUMBER_ASC:
			return sorted.sort((a, b) => a.id - b.id)
		case SortOptions.NUMBER_DESC:
			return sorted.sort((a, b) => b.id - a.id)
		case SortOptions.NAME_ASC:
			return sorted.sort((a, b) => a.name.localeCompare(b.name))
		case SortOptions.NAME_DESC:
			return sorted.sort((a, b) => b.name.localeCompare(a.name))
		default:
			return sorted
	}
}
