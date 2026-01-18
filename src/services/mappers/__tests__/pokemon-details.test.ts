import { describe, it, expect } from 'vitest'
import {
	transformPokemonData,
	extractGenus,
	extractDescription,
} from '../pokemon-details'
import type { PokemonApiResponse, PokemonSpeciesApiResponse } from '@/types'

// Mock API response for Pikachu
const mockPikachuApiResponse: PokemonApiResponse = {
	id: 25,
	name: 'pikachu',
	sprites: {
		front_default: 'pikachu-front.png',
		other: {
			'official-artwork': {
				front_default: 'pikachu-official.png',
			},
		},
	},
	types: [
		{
			slot: 1,
			type: {
				name: 'electric',
				url: 'https://pokeapi.co/api/v2/type/13/',
			},
		},
	],
	stats: [
		{
			base_stat: 35,
			effort: 0,
			stat: {
				name: 'hp',
				url: '',
			},
		},
		{
			base_stat: 55,
			effort: 0,
			stat: {
				name: 'attack',
				url: '',
			},
		},
		{
			base_stat: 40,
			effort: 0,
			stat: {
				name: 'defense',
				url: '',
			},
		},
		{
			base_stat: 50,
			effort: 0,
			stat: {
				name: 'special-attack',
				url: '',
			},
		},
		{
			base_stat: 50,
			effort: 0,
			stat: {
				name: 'special-defense',
				url: '',
			},
		},
		{
			base_stat: 90,
			effort: 2,
			stat: {
				name: 'speed',
				url: '',
			},
		},
	],
	height: 4,
	weight: 60,
	abilities: [
		{
			ability: {
				name: 'static',
				url: '',
			},
			is_hidden: false,
			slot: 1,
		},
		{
			ability: {
				name: 'lightning-rod',
				url: '',
			},
			is_hidden: true,
			slot: 3,
		},
	],
}

const mockSpeciesResponse: PokemonSpeciesApiResponse = {
	genera: [
		{
			genus: 'ねずみポケモン',
			language: {
				name: 'ja',
				url: '',
			},
		},
		{
			genus: 'Mouse Pokémon',
			language: {
				name: 'en',
				url: '',
			},
		},
		{
			genus: 'Maus-Pokémon',
			language: {
				name: 'de',
				url: '',
			},
		},
	],
	flavor_text_entries: [
		{
			flavor_text: 'ほっぺたに でんきぶくろを もっている。',
			language: {
				name: 'ja',
				url: '',
			},
			version: {
				name: 'red',
				url: '',
			},
		},
		{
			flavor_text:
				'When several of\nthese POKéMON\ngather, their\felectricity could\nbuild and cause\nlightning storms.',
			language: {
				name: 'en',
				url: '',
			},
			version: {
				name: 'red',
				url: '',
			},
		},
	],
}

describe('pokemon-details mapper', () => {
	describe('transformPokemonData', () => {
		it('transforms basic pokemon info correctly', () => {
			const result = transformPokemonData(mockPikachuApiResponse)

			expect(result.id).toBe(25)
			expect(result.name).toBe('pikachu')
			expect(result.displayName).toBe('Pikachu')
			expect(result.number).toBe('#025')
		})

		it('formats number with leading zeros', () => {
			const singleDigit = {
				...mockPikachuApiResponse,
				id: 1,
			}
			const doubleDigit = {
				...mockPikachuApiResponse,
				id: 25,
			}
			const tripleDigit = {
				...mockPikachuApiResponse,
				id: 150,
			}

			expect(transformPokemonData(singleDigit).number).toBe('#001')
			expect(transformPokemonData(doubleDigit).number).toBe('#025')
			expect(transformPokemonData(tripleDigit).number).toBe('#150')
		})

		it('capitalizes display name correctly', () => {
			const result = transformPokemonData(mockPikachuApiResponse)
			expect(result.displayName).toBe('Pikachu')

			const bulbasaur = {
				...mockPikachuApiResponse,
				name: 'bulbasaur',
			}
			expect(transformPokemonData(bulbasaur).displayName).toBe('Bulbasaur')
		})

		it('prefers official artwork over front_default sprite', () => {
			const result = transformPokemonData(mockPikachuApiResponse)
			expect(result.image).toBe('pikachu-official.png')
		})

		it('falls back to front_default when official artwork is missing', () => {
			const noArtwork: PokemonApiResponse = {
				...mockPikachuApiResponse,
				sprites: {
					front_default: 'fallback.png',
					other: {
						'official-artwork': {
							front_default: null,
						},
					},
				},
			}
			expect(transformPokemonData(noArtwork).image).toBe('fallback.png')
		})

		it('returns empty string when no sprites available', () => {
			const noSprites: PokemonApiResponse = {
				...mockPikachuApiResponse,
				sprites: {
					front_default: null,
				},
			}
			expect(transformPokemonData(noSprites).image).toBe('')
		})

		it('extracts types correctly', () => {
			const result = transformPokemonData(mockPikachuApiResponse)
			expect(result.types).toEqual([
				'electric',
			])

			const multiType: PokemonApiResponse = {
				...mockPikachuApiResponse,
				types: [
					{
						slot: 1,
						type: {
							name: 'grass',
							url: '',
						},
					},
					{
						slot: 2,
						type: {
							name: 'poison',
							url: '',
						},
					},
				],
			}
			expect(transformPokemonData(multiType).types).toEqual([
				'grass',
				'poison',
			])
		})

		it('extracts stats correctly', () => {
			const result = transformPokemonData(mockPikachuApiResponse)

			expect(result.stats).toEqual({
				hp: 35,
				attack: 55,
				defense: 40,
				specialAttack: 50,
				specialDefense: 50,
				speed: 90,
			})
		})

		it('defaults stats to 0 when missing', () => {
			const missingStat: PokemonApiResponse = {
				...mockPikachuApiResponse,
				stats: [
					{
						base_stat: 100,
						effort: 0,
						stat: {
							name: 'hp',
							url: '',
						},
					},
					// Missing other stats
				],
			}
			const result = transformPokemonData(missingStat)

			expect(result.stats.hp).toBe(100)
			expect(result.stats.attack).toBe(0)
			expect(result.stats.defense).toBe(0)
		})

		it('extracts height and weight', () => {
			const result = transformPokemonData(mockPikachuApiResponse)
			expect(result.height).toBe(4)
			expect(result.weight).toBe(60)
		})

		it('extracts abilities with hidden flag', () => {
			const result = transformPokemonData(mockPikachuApiResponse)

			expect(result.abilities).toHaveLength(2)
			expect(result.abilities[0]).toEqual({
				name: 'static',
				isHidden: false,
			})
			expect(result.abilities[1]).toEqual({
				name: 'lightning-rod',
				isHidden: true,
			})
		})
	})

	describe('extractGenus', () => {
		it('extracts English genus', () => {
			const result = extractGenus(mockSpeciesResponse)
			expect(result).toBe('Mouse Pokémon')
		})

		it('returns empty string when no English genus found', () => {
			const noEnglish: PokemonSpeciesApiResponse = {
				...mockSpeciesResponse,
				genera: [
					{
						genus: 'ねずみポケモン',
						language: {
							name: 'ja',
							url: '',
						},
					},
				],
			}
			expect(extractGenus(noEnglish)).toBe('')
		})

		it('returns empty string for empty genera array', () => {
			const empty: PokemonSpeciesApiResponse = {
				...mockSpeciesResponse,
				genera: [],
			}
			expect(extractGenus(empty)).toBe('')
		})
	})

	describe('extractDescription', () => {
		it('extracts English flavor text', () => {
			const result = extractDescription(mockSpeciesResponse)
			expect(result).toContain('When several of')
		})

		it('removes newline and form feed characters', () => {
			const result = extractDescription(mockSpeciesResponse)
			expect(result).not.toContain('\n')
			expect(result).not.toContain('\f')
			expect(result).toBe(
				'When several of these POKéMON gather, their electricity could build and cause lightning storms.',
			)
		})

		it('returns empty string when no English entry found', () => {
			const noEnglish: PokemonSpeciesApiResponse = {
				...mockSpeciesResponse,
				flavor_text_entries: [
					{
						flavor_text: 'Japanese text',
						language: {
							name: 'ja',
							url: '',
						},
						version: {
							name: 'red',
							url: '',
						},
					},
				],
			}
			expect(extractDescription(noEnglish)).toBe('')
		})

		it('returns empty string for empty flavor_text_entries', () => {
			const empty: PokemonSpeciesApiResponse = {
				...mockSpeciesResponse,
				flavor_text_entries: [],
			}
			expect(extractDescription(empty)).toBe('')
		})
	})
})
