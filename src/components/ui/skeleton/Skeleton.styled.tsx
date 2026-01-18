import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`

export const StyledSkeleton = styled.div<{
	width?: string
	height?: string
	borderRadius?: string
	aspectRatio?: string
	noBackground?: boolean
}>`
  ${({ width, height, borderRadius, aspectRatio, noBackground }) => css`
    width: ${width ?? '100%'};
    height: ${height ?? '2rem'};
    border-radius: ${borderRadius ?? 'var(--radius-sm)'};
    ${aspectRatio ? `aspect-ratio: ${aspectRatio};` : ''}

    ${
			noBackground
				? 'background: transparent'
				: css`
          background: linear-gradient(
            90deg,
            var(--bg-tertiary) 25%,
            var(--bg-secondary) 50%
          );
          background-size: 200% 100%;
          animation: ${pulse} 1.8s cubic-bezier(.4, 0, .6, 1) infinite;
        `
		}
  `}

`
