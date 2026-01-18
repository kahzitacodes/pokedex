import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import type { PropTypes, ResponsiveColumns, ResponsiveGap } from './Grid.types'

const isResponsiveColumns = (
	columns: PropTypes['columns'],
): columns is ResponsiveColumns => {
	return typeof columns === 'object' && columns !== null
}

const isResponsiveGap = (gap: PropTypes['gap']): gap is ResponsiveGap => {
	return typeof gap === 'object' && gap !== null
}

const getResponsiveGapStyles = (gap: PropTypes['gap']) => {
	if (!gap) {
		return css`gap: var(--spacing-4);`
	}

	if (isResponsiveGap(gap)) {
		return css`
			gap: ${gap.xs || 'var(--spacing-4)'};

			@media (min-width: ${theme.breakpoints.sm}) {
				gap: ${gap.sm || gap.xs || 'var(--spacing-4)'};
			}

			@media (min-width: ${theme.breakpoints.md}) {
				gap: ${gap.md || gap.sm || gap.xs || 'var(--spacing-4)'};
			}

			@media (min-width: ${theme.breakpoints.lg}) {
				gap: ${gap.lg || gap.md || gap.sm || gap.xs || 'var(--spacing-4)'};
			}

			@media (min-width: ${theme.breakpoints.xl}) {
				gap: ${gap.xl || gap.lg || gap.md || gap.sm || gap.xs || 'var(--spacing-4)'};
			}

			@media (min-width: ${theme.breakpoints['2xl']}) {
				gap: ${gap['2xl'] || gap.xl || gap.lg || gap.md || gap.sm || gap.xs || 'var(--spacing-4)'};
			}
		`
	}

	return css`gap: ${gap};`
}

const getResponsiveStyles = (columns: PropTypes['columns']) => {
	if (!columns) return null

	if (isResponsiveColumns(columns)) {
		return css`
			grid-template-columns: repeat(${columns.xs || 1}, 1fr);

			@media (min-width: ${theme.breakpoints.sm}) {
				grid-template-columns: repeat(${columns.sm || columns.xs || 1}, 1fr);
			}

			@media (min-width: ${theme.breakpoints.md}) {
				grid-template-columns: repeat(${columns.md || columns.sm || columns.xs || 2}, 1fr);
			}

			@media (min-width: ${theme.breakpoints.lg}) {
				grid-template-columns: repeat(
					${columns.lg || columns.md || columns.sm || columns.xs || 3},
					1fr
				);
			}

			@media (min-width: ${theme.breakpoints.xl}) {
				grid-template-columns: repeat(
					${columns.xl || columns.lg || columns.md || columns.sm || columns.xs || 4},
					1fr
				);
			}

			@media (min-width: ${theme.breakpoints['2xl']}) {
				grid-template-columns: repeat(
					${columns['2xl'] || columns.xl || columns.lg || columns.md || columns.sm || columns.xs || 5},
					1fr
				);
			}
		`
	}

	return css`
		grid-template-columns: repeat(${columns}, 1fr);
	`
}

export const StyledGrid = styled.div<PropTypes>`
	display: grid;
	${({ gap }) => getResponsiveGapStyles(gap)}

	${({ rowGap }) =>
		rowGap &&
		css`
			row-gap: ${rowGap};
		`}

	${({ columnGap }) =>
		columnGap &&
		css`
			column-gap: ${columnGap};
		`}

	${({ columns }) => getResponsiveStyles(columns)}
`
