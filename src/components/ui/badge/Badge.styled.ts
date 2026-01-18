import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { PokemonType } from '@/types'
import type { StyledProps } from './Badge.types'

const getTextColor = (type: PokemonType) => {
	switch (type) {
		case 'grass':
		case 'flying':
		case 'electric':
		case 'ice':
		case 'fairy':
			return 'var(--text-on-light)'
		default:
			return 'var(--text-on-dark)'
	}
}

export const StyledBadge = styled.span<StyledProps>`
  ${({ color }) => css`
    border-radius: var(--radius-xs);
    font-size: var(--text-md);
    font-weight: var(--font-bold);
    line-height: var(--text-sm_line-height);
    padding-block: var(--spacing-1);
    padding-inline: var(--spacing-2);
    background-color: var(--color-${color});
    color: ${color ? getTextColor(color) : 'var(--text-on-dark)'};
    height: fit-content;
  `}
`
