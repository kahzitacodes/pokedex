import { StyledDivider } from './Divider.styled'
import type { PropTypes } from './Divider.types'

export function Divider(props: React.ComponentProps<'div'> & PropTypes) {
	const { orientation = 'horizontal', color = 'primary', ...rest } = props

	return <StyledDivider orientation={orientation} color={color} {...rest} />
}
