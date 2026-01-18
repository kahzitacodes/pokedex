import { StyledBadge } from './Badge.styled'
import type { PropTypes } from './Badge.types'

export function Badge(props: React.ComponentProps<'span'> & PropTypes) {
	const { color = 'grass', label } = props

	return <StyledBadge color={color}>{label}</StyledBadge>
}
