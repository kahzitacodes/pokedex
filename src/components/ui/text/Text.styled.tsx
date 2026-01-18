import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { PropTypes } from './Text.types'

const modifiers = {
	xs: (noLineHeight?: boolean) => css`
    font-size: var(--text-xs);
    line-height: ${noLineHeight ? '1' : 'var(--text-xs_line-height)'};
  `,

	sm: (noLineHeight?: boolean) => css`
    font-size: var(--text-sm);
    line-height: ${noLineHeight ? '1' : 'var(--text-sm_line-height)'};
  `,

	md: (noLineHeight?: boolean) => css`
    font-size: var(--text-md);
    line-height: ${noLineHeight ? '1' : 'var(--text-md_line-height)'};
  `,

	lg: (noLineHeight?: boolean) => css`
    font-size: var(--text-lg);
    line-height: ${noLineHeight ? '1' : 'var(--text-lg_line-height)'};
  `,
}

export const StyledText = styled('span', {
	shouldForwardProp: (prop) => prop !== 'noLineHeight',
})<PropTypes>`
${({ size, color, weight, noLineHeight }) => css`

  color: var(--text-${color});
  font-weight: var(--font-${weight});

  ${!!size && modifiers[size](noLineHeight)}

`}
`
