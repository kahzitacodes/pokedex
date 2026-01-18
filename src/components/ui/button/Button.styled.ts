import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { StyledProps } from './Button.types'

const modifyers = {
	primary: css`
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text);

    :not(:disabled):hover {
      background-color: var(--btn-primary-bg_hover);
    }

    :disabled {
      background-color: var(--btn-primary-bg_disabled);
      color: var(--btn-primary-text_disabled);
    }
  `,

	secondary: css`
    background-color: var(--btn-secondary-bg); 
    border: 1px solid var(--btn-secondary-border);
    color: var(--btn-secondary-text);

    :not(:disabled):hover {
      background-color: var(--btn-secondary-bg_hover);
    }

    :disabled {
      color: var(--btn-secondary-text_disabled);
      border: 1px solid var(--btn-secondary-border_disabled);
    }
  `,
}

export const StyledButton = styled('button', {
	shouldForwardProp: (prop) => prop !== 'iconOnly',
})<
	StyledProps & {
		iconOnly: boolean
	}
>`
  ${({ variant, iconOnly }) => css`
    appearance: none;
    border: none;
    display: flex;
    min-height: var(--spacing-12);
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    transition: all var(--transition-default);
    cursor: pointer;
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    padding-inline: ${iconOnly ? 'var(--spacing-0)' : 'var(--spacing-4)'};
    min-width: ${iconOnly ? 'auto' : '0'};

    &:disabled {
      cursor: not-allowed;
    }

    ${
			iconOnly &&
			css`
        min-width: var(--spacing-12);
      `
		}

    ${modifyers[variant || 'primary']}
  `}
`

export const StyledButtonText = styled.span`
  flex: 1;
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
  padding-inline: var(--spacing-2);
`
