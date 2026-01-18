import type {
	LanguageCode,
	Pokemon,
	PokemonApiResponse,
	PokemonSpeciesApiResponse,
	PokemonStats,
} from '@/types'

export function transformPokemonData(apiData: PokemonApiResponse): Pokemon {
	const stats: PokemonStats = {
		hp: apiData.stats.find((s) => s.stat.name === 'hp')?.base_stat ?? 0,
		attack: apiData.stats.find((s) => s.stat.name === 'attack')?.base_stat ?? 0,
		defense:
			apiData.stats.find((s) => s.stat.name === 'defense')?.base_stat ?? 0,
		specialAttack:
			apiData.stats.find((s) => s.stat.name === 'special-attack')?.base_stat ??
			0,
		specialDefense:
			apiData.stats.find((s) => s.stat.name === 'special-defense')?.base_stat ??
			0,
		speed: apiData.stats.find((s) => s.stat.name === 'speed')?.base_stat ?? 0,
	}

	return {
		id: apiData.id,
		name: apiData.name,
		displayName: apiData.name.charAt(0).toUpperCase() + apiData.name.slice(1),
		number: `#${String(apiData.id).padStart(3, '0')}`,
		image:
			apiData.sprites.other?.['official-artwork']?.front_default ||
			apiData.sprites.front_default ||
			'',
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
	const genus = speciesData.genera.find((g) => g.language.name === language)
	if (genus) return genus.genus

	const englishGenus = speciesData.genera.find((g) => g.language.name === 'en')
	return englishGenus?.genus ?? ''
}

export function extractDescription(
	speciesData: PokemonSpeciesApiResponse,
	language: LanguageCode = 'en',
): string {
	const versionFilter = (entry: {
		version: {
			name: string
		}
	}) => entry.version.name === 'x' || entry.version.name === 'y'

	const flavorText = speciesData.flavor_text_entries.find(
		(entry) => entry.language.name === language && versionFilter(entry),
	)
	if (flavorText) {
		return flavorText.flavor_text.replace(/[\n\f]/g, ' ')
	}

	const anyLanguageText = speciesData.flavor_text_entries.find(
		(entry) => entry.language.name === language,
	)
	if (anyLanguageText) {
		return anyLanguageText.flavor_text.replace(/[\n\f]/g, ' ')
	}

	const englishFlavorText = speciesData.flavor_text_entries.find(
		(entry) => entry.language.name === 'en' && versionFilter(entry),
	)
	if (englishFlavorText) {
		return englishFlavorText.flavor_text.replace(/[\n\f]/g, ' ')
	}

	const anyEnglishText = speciesData.flavor_text_entries.find(
		(entry) => entry.language.name === 'en',
	)
	return anyEnglishText?.flavor_text.replace(/[\n\f]/g, ' ') ?? ''
}
