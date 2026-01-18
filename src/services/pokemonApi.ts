import type { LanguageCode } from '@/types'
import type {
	Pokemon,
	PokemonApiResponse,
	PokemonSpeciesApiResponse,
} from '@/types/pokemon'
import {
	extractDescription,
	extractGenus,
	transformPokemonData,
} from './mappers/pokemon-details'

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2'
const FIRST_GEN_POKEMON_COUNT = 151

class PokemonApiError extends Error {
	statusCode?: number

	constructor(message: string, statusCode?: number) {
		super(message)
		this.name = 'PokemonApiError'
		this.statusCode = statusCode
	}
}

async function fetchPokemonById(id: number): Promise<Pokemon> {
	try {
		const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${id}/`)

		if (!response.ok) {
			throw new PokemonApiError(
				`Failed to fetch Pokemon #${id}`,
				response.status,
			)
		}

		const data: PokemonApiResponse = await response.json()
		return transformPokemonData(data)
	} catch (error) {
		if (error instanceof PokemonApiError) throw error
		throw new PokemonApiError(`Network error fetching Pokemon #${id}`)
	}
}

async function fetchPokemonSpecies(
	id: number,
): Promise<PokemonSpeciesApiResponse> {
	try {
		const response = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${id}/`)

		if (!response.ok) {
			throw new PokemonApiError(
				`Failed to fetch Pokemon species #${id}`,
				response.status,
			)
		}

		return response.json()
	} catch (error) {
		if (error instanceof PokemonApiError) throw error
		throw new PokemonApiError(`Network error fetching Pokemon species #${id}`)
	}
}

async function fetchPokemonWithSpecies(
	id: number,
	language: LanguageCode = 'en',
): Promise<Pokemon> {
	const [pokemonData, speciesData] = await Promise.all([
		fetchPokemonById(id),
		fetchPokemonSpecies(id),
	])

	return {
		...pokemonData,
		genus: extractGenus(speciesData, language),
		description: extractDescription(speciesData, language),
	}
}

async function fetchAllFirstGenPokemon(): Promise<Pokemon[]> {
	const ids = Array.from(
		{
			length: FIRST_GEN_POKEMON_COUNT,
		},
		(_, i) => i + 1,
	)

	const BATCH_SIZE = 20
	const pokemons: Pokemon[] = []

	for (let i = 0; i < ids.length; i += BATCH_SIZE) {
		const batch = ids.slice(i, i + BATCH_SIZE)
		const batchResults = await Promise.allSettled(
			batch.map((id) => fetchPokemonById(id)),
		)

		for (const result of batchResults) {
			if (result.status === 'fulfilled') {
				pokemons.push(result.value)
			} else {
				console.error('Failed to fetch Pokemon:', result.reason)
			}
		}
	}

	return pokemons.sort((a, b) => a.id - b.id)
}

export const pokemonApi = {
	fetchPokemonById,
	fetchPokemonWithSpecies,
	fetchAllFirstGenPokemon,
}
