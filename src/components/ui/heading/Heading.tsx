import { StyledHeading } from './Heading.styled'
import type { PropTypes } from './Heading.types'

export function Heading({
	children,
	size = 'h1',
	color = 'primary',
	weight = 'bold',
	as = 'h1',
	...rest
}: React.ComponentProps<'h1'> & PropTypes) {
	return (
		<StyledHeading size={size} color={color} weight={weight} as={as} {...rest}>
			{children}
		</StyledHeading>
	)
}
