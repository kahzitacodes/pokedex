import type {
	LanguageCode,
	Pokemon,
	PokemonApiResponse,
	PokemonSpeciesApiResponse,
	PokemonStats,
} from '@/types'
import { capitalize, formatPokemonNumber } from '@/utils'

export function transformPokemonData(apiData: PokemonApiResponse): Pokemon {
	const statsMap = new Map(apiData.stats.map((s) => [s.stat.name, s.base_stat]))

	const stats: PokemonStats = {
		hp: statsMap.get('hp') ?? 0,
		attack: statsMap.get('attack') ?? 0,
		defense: statsMap.get('defense') ?? 0,
		specialAttack: statsMap.get('special-attack') ?? 0,
		specialDefense: statsMap.get('special-defense') ?? 0,
		speed: statsMap.get('speed') ?? 0,
	}

	const image =
		apiData.sprites.other?.['official-artwork']?.front_default ??
		apiData.sprites.front_default ??
		''

	return {
		id: apiData.id,
		name: apiData.name,
		displayName: capitalize(apiData.name),
		number: `#${formatPokemonNumber(apiData.id)}`,
		image,
		types: apiData.types.map((t) => t.type.name),
		stats,
		height: apiData.height,
		weight: apiData.weight,
		abilities: apiData.abilities.map((a) => ({
			name: a.ability.name,
			isHidden: a.is_hidden,
		})),
	}
}

export function extractGenus(
	speciesData: PokemonSpeciesApiResponse,
	language: LanguageCode = 'en',
): string {
	const genusMap = new Map(
		speciesData.genera.map((g) => [g.language.name, g.genus]),
	)

	return genusMap.get(language) ?? genusMap.get('en') ?? ''
}

export function extractDescription(
	speciesData: PokemonSpeciesApiResponse,
	language: LanguageCode = 'en',
): string {
	const flavorTextEntries = speciesData.flavor_text_entries

	const matches = (lang: LanguageCode, versions: string[] = []) =>
		flavorTextEntries.find(
			(e) =>
				e.language.name === lang &&
				(versions.includes(e.version.name) || versions.length === 0),
		)

	const finalFlavorText =
		matches(language, ['x', 'y']) ??
		matches(language) ??
		matches('en', ['x', 'y']) ??
		matches('en')

	return finalFlavorText?.flavor_text.replace(/[\n\f]/g, ' ') ?? ''
}
