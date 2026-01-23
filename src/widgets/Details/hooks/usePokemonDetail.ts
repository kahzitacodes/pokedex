import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useLanguage } from '@/contexts/LanguageContext'
import { pokemonApi } from '@/services/pokemonApi'
import type { Pokemon } from '@/types/pokemon'

interface UsePokemonDetail {
	pokemon: Pokemon | null
	loading: boolean
	error: Error | null
}

export function usePokemonDetail(id: string | undefined): UsePokemonDetail {
	const queryClient = useQueryClient()
	const { language } = useLanguage()
	const numericId = id ? Number(id) : null
	const isValidId = numericId !== null && !Number.isNaN(numericId)

	const { data, isLoading, error } = useQuery<Pokemon, Error>({
		queryKey: ['pokemon', 'detail', numericId, language],
		queryFn: () =>
			pokemonApi.fetchPokemonWithSpecies(numericId as number, language),
		enabled: isValidId,
		initialData: () => {
			const listData = queryClient.getQueryData<Pokemon[]>(['pokemon', 'list'])
			return listData?.find((p) => p.id === numericId)
		},
		staleTime: (query) => {
			const queryData = query.state.data
			return queryData?.genus ? 5 * 60 * 1000 : 0
		},
	})

	return {
		pokemon: data ?? null,
		loading: isLoading,
		error: isValidId ? (error ?? null) : new Error('Invalid Pokemon ID'),
	}
}
