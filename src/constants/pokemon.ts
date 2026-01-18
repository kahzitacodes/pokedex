import type { SortOption } from '@/types/pokemon'

export const SortOptions: Record<string, SortOption> = {
	NUMBER_ASC: 'number-asc',
	NUMBER_DESC: 'number-desc',
	NAME_ASC: 'name-asc',
	NAME_DESC: 'name-desc',
} as const
