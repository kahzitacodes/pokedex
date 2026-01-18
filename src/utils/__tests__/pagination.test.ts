import { describe, expect, it } from 'vitest'
import type { Pokemon } from '@/types/pokemon'
import { paginatePokemon } from '../pagination'

function createMockPokemon(count: number): Pokemon[] {
	return Array.from(
		{
			length: count,
		},
		(_, i) => ({
			id: i + 1,
			name: `Pokemon${i + 1}`,
			number: String(i + 1).padStart(4, '0'),
			types: [
				'normal',
			],
			image: `pokemon${i + 1}.png`,
			stats: {
				hp: 50,
				attack: 50,
				defense: 50,
				specialAttack: 50,
				specialDefense: 50,
				speed: 50,
			},
			abilities: [],
			displayName: '',
			height: 10,
			weight: 10,
		}),
	)
}

describe('paginatePokemon', () => {
	describe('basic pagination', () => {
		it('returns correct items for first page', () => {
			const pokemon = createMockPokemon(30)
			const result = paginatePokemon(pokemon, 1, 12)

			expect(result.items).toHaveLength(12)
			expect(result.items[0].id).toBe(1)
			expect(result.items[11].id).toBe(12)
			expect(result.currentPage).toBe(1)
			expect(result.totalPages).toBe(3)
			expect(result.totalItems).toBe(30)
		})

		it('returns correct items for middle page', () => {
			const pokemon = createMockPokemon(30)
			const result = paginatePokemon(pokemon, 2, 12)

			expect(result.items).toHaveLength(12)
			expect(result.items[0].id).toBe(13)
			expect(result.items[11].id).toBe(24)
			expect(result.currentPage).toBe(2)
		})

		it('returns correct items for last page', () => {
			const pokemon = createMockPokemon(30)
			const result = paginatePokemon(pokemon, 3, 12)

			expect(result.items).toHaveLength(6) // 30 - 24 = 6
			expect(result.items[0].id).toBe(25)
			expect(result.items[5].id).toBe(30)
			expect(result.currentPage).toBe(3)
		})
	})

	describe('pagination indices', () => {
		it('calculates correct startIndex and endIndex', () => {
			const pokemon = createMockPokemon(50)

			const page1 = paginatePokemon(pokemon, 1, 10)
			expect(page1.startIndex).toBe(0)
			expect(page1.endIndex).toBe(10)

			const page2 = paginatePokemon(pokemon, 2, 10)
			expect(page2.startIndex).toBe(10)
			expect(page2.endIndex).toBe(20)

			const page5 = paginatePokemon(pokemon, 5, 10)
			expect(page5.startIndex).toBe(40)
			expect(page5.endIndex).toBe(50)
		})
	})

	describe('boundary conditions', () => {
		it('clamps page to 1 when page is 0', () => {
			const pokemon = createMockPokemon(30)
			const result = paginatePokemon(pokemon, 0, 12)

			expect(result.currentPage).toBe(1)
			expect(result.items[0].id).toBe(1)
		})

		it('clamps page to 1 when page is negative', () => {
			const pokemon = createMockPokemon(30)
			const result = paginatePokemon(pokemon, -5, 12)

			expect(result.currentPage).toBe(1)
		})

		it('clamps page to max when page exceeds total pages', () => {
			const pokemon = createMockPokemon(30)
			const result = paginatePokemon(pokemon, 100, 12)

			expect(result.currentPage).toBe(3)
			expect(result.items[0].id).toBe(25) // Last page items
		})
	})

	describe('empty and edge cases', () => {
		it('handles empty array', () => {
			const result = paginatePokemon([], 1, 12)

			expect(result.items).toHaveLength(0)
			expect(result.totalPages).toBe(0)
			expect(result.currentPage).toBe(1)
			expect(result.totalItems).toBe(0)
			expect(result.startIndex).toBe(0)
			expect(result.endIndex).toBe(0)
		})

		it('handles array smaller than page size', () => {
			const pokemon = createMockPokemon(5)
			const result = paginatePokemon(pokemon, 1, 12)

			expect(result.items).toHaveLength(5)
			expect(result.totalPages).toBe(1)
			expect(result.currentPage).toBe(1)
		})

		it('handles array exactly equal to page size', () => {
			const pokemon = createMockPokemon(12)
			const result = paginatePokemon(pokemon, 1, 12)

			expect(result.items).toHaveLength(12)
			expect(result.totalPages).toBe(1)
		})

		it('handles single item array', () => {
			const pokemon = createMockPokemon(1)
			const result = paginatePokemon(pokemon, 1, 12)

			expect(result.items).toHaveLength(1)
			expect(result.totalPages).toBe(1)
			expect(result.totalItems).toBe(1)
		})
	})

	describe('different page sizes', () => {
		it('works with custom page size', () => {
			const pokemon = createMockPokemon(25)
			const result = paginatePokemon(pokemon, 1, 5)

			expect(result.items).toHaveLength(5)
			expect(result.totalPages).toBe(5)
		})

		it('uses default page size of 12', () => {
			const pokemon = createMockPokemon(24)
			const result = paginatePokemon(pokemon, 1)

			expect(result.items).toHaveLength(12)
			expect(result.totalPages).toBe(2)
		})
	})
})
