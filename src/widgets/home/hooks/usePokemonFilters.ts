import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SortOptions, ViewModes } from '@/constants'
import type { PaginationResult, ViewMode } from '@/types'
import type { Pokemon, SortOption } from '@/types/pokemon'
import { processPokemonList } from '@/utils'

interface UsePokemonFilters {
	searchQuery: string
	handleSearch: (query: string) => void
	sortBy: SortOption
	handleSortBy: (sort: SortOption) => void
	viewMode: ViewMode
	handleViewMode: (mode: ViewMode) => void
	currentPage: number
	handlePageChange: (page: number) => void
	result: PaginationResult<Pokemon>
	resetFilters: () => void
}

const ITEMS_PER_PAGE = 12
const DEFAULT_SORT: SortOption = SortOptions.NUMBER_ASC
const DEFAULT_VIEW_MODE: ViewMode = ViewModes.GRID
const SORT_OPTIONS: SortOption[] = Object.values(SortOptions)
const VIEW_MODE_OPTIONS: ViewMode[] = Object.values(ViewModes)

function isValidSortOption(value: string | null): value is SortOption {
	return value !== null && SORT_OPTIONS.includes(value as SortOption)
}

function isValidViewMode(value: string | null): value is ViewMode {
	return value !== null && VIEW_MODE_OPTIONS.includes(value as ViewMode)
}

export function usePokemonFilters(pokemonList: Pokemon[]): UsePokemonFilters {
	const [searchParams, setSearchParams] = useSearchParams()

	const searchQuery = searchParams.get('search') ?? ''
	const sortParam = searchParams.get('sort')
	const sortBy: SortOption = isValidSortOption(sortParam)
		? sortParam
		: DEFAULT_SORT
	const viewParam = searchParams.get('view')
	const viewMode: ViewMode = isValidViewMode(viewParam)
		? viewParam
		: DEFAULT_VIEW_MODE
	const currentPage = Math.max(1, Number(searchParams.get('page')) || 1)

	const result = useMemo(() => {
		return processPokemonList(pokemonList, {
			searchQuery,
			sortBy,
			page: currentPage,
			itemsPerPage: ITEMS_PER_PAGE,
		})
	}, [
		pokemonList,
		searchQuery,
		sortBy,
		currentPage,
	])

	const updateParams = (updates: Record<string, string | null>) => {
		setSearchParams((prev) => {
			const next = new URLSearchParams(prev)
			for (const [key, value] of Object.entries(updates)) {
				if (value === null || value === '') {
					next.delete(key)
				} else {
					next.set(key, value)
				}
			}
			return next
		})
	}

	const handleSearch = (query: string) => {
		updateParams({
			search: query || null,
			page: null,
		})
	}

	const handleSortBy = (sort: SortOption) => {
		updateParams({
			sort: sort === DEFAULT_SORT ? null : sort,
			page: null,
		})
	}

	const handleViewMode = (mode: ViewMode) => {
		updateParams({
			view: mode === DEFAULT_VIEW_MODE ? null : mode,
		})
	}

	const handlePageChange = (page: number) => {
		updateParams({
			page: page === 1 ? null : String(page),
		})
	}

	const resetFilters = () => {
		setSearchParams(new URLSearchParams())
	}

	return {
		searchQuery,
		handleSearch,
		sortBy,
		handleSortBy,
		viewMode,
		handleViewMode,
		currentPage,
		handlePageChange,
		result,
		resetFilters,
	}
}
