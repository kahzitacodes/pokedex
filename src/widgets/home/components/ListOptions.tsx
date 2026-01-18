import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaList } from 'react-icons/fa6'
import { Button, Label, Select } from '@/components'
import type { ViewMode } from '@/types'
import { SortOptions } from '@/constants'
import type { SortOption } from '@/types/pokemon'

export type ListOptionsProps = {
	sortBy: SortOption
	onSortChange: (sort: SortOption) => void
	viewMode?: ViewMode
	onViewModeChange?: (mode: ViewMode) => void
}

const SORT_OPTIONS = [
	{
		value: SortOptions.NUMBER_ASC,
		label: 'Lowest Number (first)',
	},
	{
		value: SortOptions.NUMBER_DESC,
		label: 'Highest Number (first)',
	},
	{
		value: SortOptions.NAME_ASC,
		label: 'A to Z',
	},
	{
		value: SortOptions.NAME_DESC,
		label: 'Z to A',
	},
]

export function ListOptions({
	sortBy,
	onSortChange,
	viewMode = 'grid',
	onViewModeChange,
}: ListOptionsProps) {
	return (
		<div className='flex justify-between items-center gap-4'>
			<div className='flex gap-2 flex-2'>
				<Button
					iconStart={<BsFillGrid3X3GapFill />}
					variant={viewMode === 'grid' ? 'primary' : 'secondary'}
					onClick={() => onViewModeChange?.('grid')}
				/>
				<Button
					iconStart={<FaList />}
					variant={viewMode === 'list' ? 'primary' : 'secondary'}
					onClick={() => onViewModeChange?.('list')}
				/>
			</div>
			<div className='flex gap-2 items-center justify-end flex-1'>
				<Label>Sort by:</Label>
				<Select
					options={SORT_OPTIONS}
					value={sortBy}
					onValueChange={(value) => onSortChange(value as SortOption)}
				/>
			</div>
		</div>
	)
}
