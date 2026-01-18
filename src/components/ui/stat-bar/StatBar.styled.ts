import styled from '@emotion/styled'
import type { StyledProps } from './StatBar.types'

export const StatRow = styled.div`
  display: grid;
  grid-template-columns: 7rem 3rem 1fr;
  gap: var(--spacing-3);
  align-items: center;
`

export const StatBarContainer = styled.div`
  height: 0.8rem;
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
`

export const StatBarFill = styled.div<StyledProps>`
  height: 100%;
  width: ${({ percentage }) => `${percentage}%`};
  background-color: ${({ color }) => color};
  border-radius: var(--radius-full);
  transition: width var(--transition-default);
`
