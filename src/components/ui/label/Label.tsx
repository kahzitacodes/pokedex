import { StyledLabel } from './Label.styled'
import type { PropTypes } from './Label.types'

export function Label(props: PropTypes) {
	const { children } = props
	return <StyledLabel {...props}>{children}</StyledLabel>
}
