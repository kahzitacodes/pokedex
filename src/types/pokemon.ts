export type PokemonType =
	| 'grass'
	| 'poison'
	| 'fire'
	| 'water'
	| 'flying'
	| 'bug'
	| 'normal'
	| 'electric'
	| 'ground'
	| 'fairy'
	| 'fighting'
	| 'psychic'
	| 'rock'
	| 'steel'
	| 'ice'
	| 'ghost'
	| 'dragon'
	| 'dark'

export type StatName =
	| 'hp'
	| 'attack'
	| 'defense'
	| 'special-attack'
	| 'special-defense'
	| 'speed'

export interface PokemonStats {
	hp: number
	attack: number
	defense: number
	specialAttack: number
	specialDefense: number
	speed: number
}

export interface PokemonApiResponse {
	id: number
	name: string
	sprites: {
		front_default: string | null
		other?: {
			'official-artwork': {
				front_default: string | null
			}
		}
	}
	types: Array<{
		slot: number
		type: {
			name: PokemonType
			url: string
		}
	}>
	stats: Array<{
		base_stat: number
		effort: number
		stat: {
			name: StatName
			url: string
		}
	}>
	height: number
	weight: number
	abilities: Array<{
		ability: {
			name: string
			url: string
		}
		is_hidden: boolean
		slot: number
	}>
}

export interface PokemonSpeciesApiResponse {
	genera: Array<{
		genus: string
		language: {
			name: string
			url: string
		}
	}>
	flavor_text_entries: Array<{
		flavor_text: string
		language: {
			name: string
			url: string
		}
		version: {
			name: string
			url: string
		}
	}>
}

export interface Pokemon {
	id: number
	name: string
	displayName: string
	number: string
	image: string
	types: PokemonType[]
	stats: PokemonStats
	height: number
	weight: number
	abilities: Array<{
		name: string
		isHidden: boolean
	}>
	genus?: string
	description?: string
}

export type SortOption = 'number-asc' | 'number-desc' | 'name-asc' | 'name-desc'
