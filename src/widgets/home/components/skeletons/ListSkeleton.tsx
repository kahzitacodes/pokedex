import type { CardDirection } from '@/components'
import { type Columns, Grid, type ResponsiveColumns } from '@/components/layout'
import type { ViewMode } from '@/types/listing'
import { CardSkeleton } from './CardSkeleton'

export type ListSkeletonProps = {
	viewMode?: ViewMode
}

export function ListSkeleton({ viewMode = 'grid' }: ListSkeletonProps) {
	const itemsCount = 12
	const gridConfig: Columns | ResponsiveColumns =
		viewMode === 'list'
			? 1
			: {
					xs: 1,
					sm: 2,
					md: 3,
					lg: 4,
					xl: 4,
					'2xl': 6,
				}

	const cardDirection: CardDirection =
		viewMode === 'list' ? 'horizontal' : 'vertical'

	return (
		<Grid className='py-4' columns={gridConfig}>
			{Array.from({
				length: itemsCount,
			}).map((_, index) => (
				<CardSkeleton
					key={`card-skeleton-${index.toString()}`}
					direction={cardDirection}
				/>
			))}
		</Grid>
	)
}
