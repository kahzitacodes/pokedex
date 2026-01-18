import { Text } from '@/components'
import * as S from './StatBar.styled'
import type { PropTypes } from './StatBar.types'

function getStatColor(value: number): string {
	if (value >= 100) return 'var(--color-grass)'
	if (value >= 70) return 'var(--color-water)'
	if (value >= 50) return 'var(--color-electric)'
	return 'var(--color-fire)'
}

export function StatBar({ label, value, maxValue = 255 }: PropTypes) {
	const percentage = Math.min((value / maxValue) * 100, 100)

	return (
		<S.StatRow>
			<Text size='sm' color='secondary'>
				{label}
			</Text>
			<Text size='sm' weight='bold'>
				{value}
			</Text>
			<S.StatBarContainer>
				<S.StatBarFill percentage={percentage} color={getStatColor(value)} />
			</S.StatBarContainer>
		</S.StatRow>
	)
}
