import { StyledGrid } from './Grid.styled'
import type { PropTypes } from './Grid.types'

export function Grid({
	children,
	columns = {
		xs: 1,
		sm: 2,
		md: 3,
		lg: 4,
		xl: 4,
		'2xl': 5,
	},
	gap,
	rowGap,
	columnGap,
	...rest
}: React.ComponentProps<'div'> & PropTypes) {
	return (
		<StyledGrid
			columns={columns}
			gap={gap}
			rowGap={rowGap}
			columnGap={columnGap}
			{...rest}
		>
			{children}
		</StyledGrid>
	)
}
