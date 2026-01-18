import { useQuery } from '@tanstack/react-query'
import { pokemonApi } from '@/services/pokemonApi'
import type { Pokemon } from '@/types/pokemon'

interface UsePokemonList {
	pokemonList: Pokemon[]
	loadingList: boolean
	error: Error | null
}

export function usePokemonList(): UsePokemonList {
	const { data, isLoading, error } = useQuery<Pokemon[], Error>({
		queryKey: [
			'pokemon',
			'list',
		],
		queryFn: () => pokemonApi.fetchAllFirstGenPokemon(),
	})

	return {
		pokemonList: data ?? [],
		loadingList: isLoading,
		error: error ?? null,
	}
}
