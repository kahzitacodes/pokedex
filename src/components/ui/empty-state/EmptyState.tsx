import { TbPokeball } from 'react-icons/tb'
import { Heading } from '../heading'
import { Text } from '../text'
import {
	StyledEmptyState,
	StyledIconWrapper,
	StyledTextContent,
} from './EmptyState.styled'
import type { PropTypes } from './EmptyState.types'

export function EmptyState({ icon, title, description, action }: PropTypes) {
	return (
		<StyledEmptyState>
			<StyledIconWrapper>{icon ?? <TbPokeball />}</StyledIconWrapper>

			{(title || description) && (
				<StyledTextContent>
					{title && (
						<Heading size='h3' as='h3' color='primary'>
							{title}
						</Heading>
					)}
					{description && (
						<Text size='md' color='secondary'>
							{description}
						</Text>
					)}
				</StyledTextContent>
			)}

			{action}
		</StyledEmptyState>
	)
}
