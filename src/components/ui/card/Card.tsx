import { Badge } from '@/components/ui/badge'
import { Heading } from '../heading'
import { Text } from '../text'
import * as S from './Card.styled'
import type { PropTypes } from './Card.types'
import '/image/placeholder.svg'

export function Card(props: React.ComponentProps<'div'> & PropTypes) {
	const {
		title,
		recordId,
		tags,
		image,
		onClick,
		direction = 'vertical',
	} = props

	const imageSrc = image ?? '/image/placeholder.svg'

	return (
		<S.StyledCard onClick={onClick} direction={direction}>
			<S.StyledCardImage>
				<img src={imageSrc} alt={title} loading='lazy' />
			</S.StyledCardImage>
			<S.StyledContent>
				<S.StyledInfo>
					<Text weight='bold' color='secondary'>
						{recordId}
					</Text>
					<Heading size='h3' as='h3' color='primary'>
						{title}
					</Heading>
				</S.StyledInfo>
				{tags?.length && (
					<div className='flex gap-2 flex-wrap '>
						{tags.map((tag) => (
							<Badge key={tag.label} color={tag.color} label={tag.label} />
						))}
					</div>
				)}
			</S.StyledContent>
		</S.StyledCard>
	)
}
