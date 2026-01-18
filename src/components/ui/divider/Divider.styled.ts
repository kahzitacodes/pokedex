import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { StyledProps } from './Divider.types'

export const StyledDivider = styled.div<StyledProps>`
	background-color: var(--border-${({ color }) => color || 'primary'});

	${({ orientation }) =>
		orientation === 'vertical'
			? css`
					width: 1px;
					height: 100%;
				`
			: css`
					width: 100%;
					height: 1px;
				`}
`
