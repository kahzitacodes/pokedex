import type { ViewMode } from '@/types/listing'

export const ViewModes: Record<string, ViewMode> = {
	GRID: 'grid',
	LIST: 'list',
} as const
