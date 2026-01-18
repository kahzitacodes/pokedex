import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeProvider, useTheme } from '../ThemeContext'

function wrapper({ children }: { children: ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>
}

describe('ThemeContext', () => {
	beforeEach(() => {
		localStorage.clear()
		vi.restoreAllMocks()
		document.documentElement.removeAttribute('data-theme')
	})

	describe('useTheme hook', () => {
		it('throws error when used outside ThemeProvider', () => {
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

			expect(() => {
				renderHook(() => useTheme())
			}).toThrow('useTheme must be used within ThemeProvider')

			consoleSpy.mockRestore()
		})

		it('returns theme context when used inside ThemeProvider', () => {
			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			expect(result.current).toHaveProperty('mode')
			expect(result.current).toHaveProperty('toggleTheme')
			expect(result.current).toHaveProperty('setTheme')
		})
	})

	describe('initial theme', () => {
		it('defaults to light theme when no preference is stored', () => {
			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			expect(result.current.mode).toBe('light')
		})

		it('reads theme from localStorage if available', () => {
			localStorage.setItem('theme', 'dark')

			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			expect(result.current.mode).toBe('dark')
		})

		it('respects system dark mode preference when no localStorage value', () => {
			// Mock matchMedia to return dark preference
			vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
				matches: query === '(prefers-color-scheme: dark)',
				media: query,
				onchange: null,
				addListener: vi.fn(),
				removeListener: vi.fn(),
				addEventListener: vi.fn(),
				removeEventListener: vi.fn(),
				dispatchEvent: vi.fn(),
			}))

			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			expect(result.current.mode).toBe('dark')
		})
	})

	describe('toggleTheme', () => {
		it('toggles from light to dark', () => {
			// Explicitly set light mode as initial state
			localStorage.setItem('theme', 'light')
			document.documentElement.removeAttribute('data-theme')

			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			expect(result.current.mode).toBe('light')

			act(() => {
				result.current.toggleTheme()
			})

			expect(result.current.mode).toBe('dark')
		})

		it('toggles from dark to light', () => {
			localStorage.setItem('theme', 'dark')
			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			expect(result.current.mode).toBe('dark')

			act(() => {
				result.current.toggleTheme()
			})

			expect(result.current.mode).toBe('light')
		})
	})

	describe('setTheme', () => {
		it('sets theme to dark', () => {
			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			act(() => {
				result.current.setTheme('dark')
			})

			expect(result.current.mode).toBe('dark')
		})

		it('sets theme to light', () => {
			localStorage.setItem('theme', 'dark')
			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			act(() => {
				result.current.setTheme('light')
			})

			expect(result.current.mode).toBe('light')
		})
	})

	describe('persistence', () => {
		it('saves theme to localStorage when changed', () => {
			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			act(() => {
				result.current.toggleTheme()
			})

			expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark')
		})

		it('sets data-theme attribute on document element', () => {
			// Explicitly set light mode as initial state
			localStorage.setItem('theme', 'light')
			document.documentElement.removeAttribute('data-theme')

			const { result } = renderHook(() => useTheme(), {
				wrapper,
			})

			expect(document.documentElement.getAttribute('data-theme')).toBe('light')

			act(() => {
				result.current.toggleTheme()
			})

			expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
		})
	})
})
