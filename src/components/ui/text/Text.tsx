import { StyledText } from './Text.styled'
import type { PropTypes } from './Text.types'

export function Text(props: React.ComponentProps<'span'> & PropTypes) {
	const {
		children,
		size = 'md',
		color = 'primary',
		weight = 'normal',
		noLineHeight = false,
	} = props

	return (
		<StyledText
			size={size}
			color={color}
			weight={weight}
			noLineHeight={noLineHeight}
		>
			{children}
		</StyledText>
	)
}
