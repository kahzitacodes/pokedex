import { describe, expect, it } from 'vitest'
import { formatPokemonNumber } from '../format'

describe('formatPokemonNumber', () => {
	it('pads single digit numbers with three zeros', () => {
		expect(formatPokemonNumber(1)).toBe('0001')
		expect(formatPokemonNumber(9)).toBe('0009')
	})

	it('pads double digit numbers with two zeros', () => {
		expect(formatPokemonNumber(10)).toBe('0010')
		expect(formatPokemonNumber(25)).toBe('0025')
		expect(formatPokemonNumber(99)).toBe('0099')
	})

	it('pads triple digit numbers with one zero', () => {
		expect(formatPokemonNumber(100)).toBe('0100')
		expect(formatPokemonNumber(151)).toBe('0151')
		expect(formatPokemonNumber(999)).toBe('0999')
	})

	it('does not pad four digit numbers', () => {
		expect(formatPokemonNumber(1000)).toBe('1000')
		expect(formatPokemonNumber(1234)).toBe('1234')
	})

	it('handles zero', () => {
		expect(formatPokemonNumber(0)).toBe('0000')
	})
})
