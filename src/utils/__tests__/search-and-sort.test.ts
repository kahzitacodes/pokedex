import { describe, expect, it } from 'vitest'
import { SortOptions } from '@/constants'
import type { Pokemon } from '@/types/pokemon'
import { searchPokemon, sortPokemon } from '../search-and-sort'

const mockPokemon: Pokemon[] = [
	{
		id: 1,
		name: 'Bulbasaur',
		number: '0001',
		types: ['grass', 'poison'],
		image: 'bulbasaur.png',
		stats: {
			hp: 45,
			attack: 49,
			defense: 49,
			specialAttack: 65,
			specialDefense: 65,
			speed: 45,
		},
		displayName: 'Bulbasaur',
		height: 10,
		weight: 10,
		abilities: [],
	},
	{
		id: 25,
		name: 'Pikachu',
		number: '0025',
		types: ['electric'],
		image: 'pikachu.png',
		stats: {
			hp: 35,
			attack: 55,
			defense: 40,
			specialAttack: 50,
			specialDefense: 50,
			speed: 90,
		},
		displayName: 'Pikachu',
		height: 10,
		weight: 10,
		abilities: [],
	},
	{
		id: 6,
		name: 'Charizard',
		number: '0006',
		types: ['fire', 'flying'],
		image: 'charizard.png',
		stats: {
			hp: 78,
			attack: 84,
			defense: 78,
			specialAttack: 109,
			specialDefense: 85,
			speed: 100,
		},
		displayName: 'Charizard',
		height: 10,
		weight: 10,
		abilities: [],
	},
	{
		id: 150,
		name: 'Mewtwo',
		number: '0150',
		types: ['psychic'],
		image: 'mewtwo.png',
		stats: {
			hp: 106,
			attack: 110,
			defense: 90,
			specialAttack: 154,
			specialDefense: 90,
			speed: 130,
		},
		displayName: 'Mewtwo',
		height: 10,
		weight: 10,
		abilities: [],
	},
]

describe('searchPokemon', () => {
	describe('empty or whitespace query', () => {
		it('returns all pokemon when query is empty', () => {
			const result = searchPokemon(mockPokemon, '')
			expect(result).toHaveLength(4)
			expect(result).toEqual(mockPokemon)
		})

		it('returns all pokemon when query is only whitespace', () => {
			const result = searchPokemon(mockPokemon, '   ')
			expect(result).toHaveLength(4)
		})
	})

	describe('name search', () => {
		it('finds pokemon by exact name (case insensitive)', () => {
			const result = searchPokemon(mockPokemon, 'pikachu')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Pikachu')
		})

		it('finds pokemon by partial name', () => {
			const result = searchPokemon(mockPokemon, 'char')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Charizard')
		})

		it('is case insensitive', () => {
			const result = searchPokemon(mockPokemon, 'BULBASAUR')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Bulbasaur')
		})

		it('trims whitespace from query', () => {
			const result = searchPokemon(mockPokemon, '  pikachu  ')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Pikachu')
		})
	})

	describe('number search', () => {
		it('finds pokemon by ID number', () => {
			const result = searchPokemon(mockPokemon, '25')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Pikachu')
		})

		it('finds pokemon by formatted number string', () => {
			const result = searchPokemon(mockPokemon, '0006')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Charizard')
		})

		it('removes # prefix from query', () => {
			const result = searchPokemon(mockPokemon, '#25')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Pikachu')
		})

		it('finds pokemon by partial number match', () => {
			const result = searchPokemon(mockPokemon, '15')
			expect(result).toHaveLength(1)
			expect(result[0].name).toBe('Mewtwo') // 150 contains '15'
		})
	})

	describe('no matches', () => {
		it('returns empty array when no pokemon match', () => {
			const result = searchPokemon(mockPokemon, 'Squirtle')
			expect(result).toHaveLength(0)
		})
	})

	describe('empty input', () => {
		it('handles empty pokemon array', () => {
			const result = searchPokemon([], 'pikachu')
			expect(result).toHaveLength(0)
		})
	})
})

describe('sortPokemon', () => {
	it('sorts by number ascending', () => {
		const result = sortPokemon(mockPokemon, SortOptions.NUMBER_ASC)
		expect(result.map((p) => p.id)).toEqual([1, 6, 25, 150])
	})

	it('sorts by number descending', () => {
		const result = sortPokemon(mockPokemon, SortOptions.NUMBER_DESC)
		expect(result.map((p) => p.id)).toEqual([150, 25, 6, 1])
	})

	it('sorts by name ascending (A-Z)', () => {
		const result = sortPokemon(mockPokemon, SortOptions.NAME_ASC)
		expect(result.map((p) => p.name)).toEqual([
			'Bulbasaur',
			'Charizard',
			'Mewtwo',
			'Pikachu',
		])
	})

	it('sorts by name descending (Z-A)', () => {
		const result = sortPokemon(mockPokemon, SortOptions.NAME_DESC)
		expect(result.map((p) => p.name)).toEqual([
			'Pikachu',
			'Mewtwo',
			'Charizard',
			'Bulbasaur',
		])
	})

	it('does not mutate the original array', () => {
		const original = [...mockPokemon]
		sortPokemon(mockPokemon, SortOptions.NAME_ASC)
		expect(mockPokemon).toEqual(original)
	})

	it('returns the array unchanged for unknown sort option', () => {
		// biome-ignore lint/suspicious/noExplicitAny: the value is unknown
		const result = sortPokemon(mockPokemon, 'unknown' as any)
		expect(result).toHaveLength(4)
	})

	it('handles empty array', () => {
		const result = sortPokemon([], SortOptions.NUMBER_ASC)
		expect(result).toHaveLength(0)
	})

	it('handles single item array', () => {
		const single = [mockPokemon[0]]
		const result = sortPokemon(single, SortOptions.NUMBER_ASC)
		expect(result).toHaveLength(1)
		expect(result[0].name).toBe('Bulbasaur')
	})
})
