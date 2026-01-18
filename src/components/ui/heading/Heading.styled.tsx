import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { PropTypes } from './Heading.types'

const sizeModifiers = {
	h3: css`
    font-size: var(--heading-sm);
    line-height: var(--heading-sm_line-height);
  `,

	h2: css`
    font-size: var(--heading-md);
    line-height: var(--heading-md_line-height);
  `,

	h1: css`
    font-size: var(--heading-lg);
    line-height: var(--heading-lg_line-height);
  `,
}

export const StyledHeading = styled.h1<PropTypes>`
${({ size, color, weight }) => css`
  color: var(--text-${color});
  font-weight: var(--font-${weight});

  ${!!size && sizeModifiers[size]}
`}
`
