import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { CardDirection } from './Card.types'

export const StyledCardImage = styled.div`
  border-radius: var(--radius-md);
  aspect-ratio: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-tertiary);
  
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    transform: scale(0.9);
    transition: transform var(--transition-default);
  }
`

export const StyledCard = styled.div<{
	direction: CardDirection
}>`
${({ direction }) => css`
  ${modifier[direction]}
`}
  border-radius: var(--radius-lg);
  background-color: var(--bg-primary);
  border: 1px solid var(--border-primary);
  display: flex;
  cursor: pointer;
  padding: var(--spacing-4);

  transition: all var(--transition-default);

  &:hover {
    border: 1px solid var(--border-primary_hover);
    box-shadow: var(--shadow-lg);
    transform: scale(1.05);

    ${StyledCardImage} {
      img {
        transform: scale(0.95);
      }
    }
  }
`

export const StyledContent = styled.div`
  display: flex;
`

const modifier = {
	horizontal: css`
    flex-direction: row;
    gap: var(--spacing-5);
    align-items: center;

    ${StyledCardImage} {
      width: 12rem;
    }

    ${StyledContent} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-6);
      width: 100%;
    }
  `,
	vertical: css`
    flex-direction: column;
    gap: var(--spacing-3);

    ${StyledContent} {
      flex-direction: column;
      gap: var(--spacing-1)
    }
  `,
}
