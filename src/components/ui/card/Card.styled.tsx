import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme } from '@/styles'
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
    box-shadow: var(--shadow-md);

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

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const modifier = {
	horizontal: css`
    flex-direction: row;
    gap: var(--spacing-5);
    align-items: center;
    :hover {
      transform: scale(1.03);
    }

    ${StyledCardImage} {
      min-width: 12rem;
      width: 12rem;
    }

    ${StyledContent} {
      flex-direction: column;
      gap: var(--spacing-1);
      width: 100%;
    }

    ${StyledInfo} {
      padding-bottom: var(--spacing-1);
    }

    @media (min-width: ${theme.breakpoints.sm}) {
      ${StyledContent} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: var(--spacing-6);
        width: 100%;
      }

      ${StyledInfo} {
        padding-bottom: var(--spacing-1);
      }
    }
  `,
	vertical: css`
    flex-direction: column;
    gap: var(--spacing-3);
    :hover {
      transform: scale(1.05);
    }

    ${StyledContent} {
      flex-direction: column;
      gap: var(--spacing-1)
    }

    ${StyledInfo} {
      padding-bottom: var(--spacing-1);
    }
  `,
}
