import styled from '@emotion/styled'

export const StyledWrapper = styled.div`
	display: flex;
	gap: var(--spacing-2);
	flex-direction: column;
	max-width: 50rem;
	width: 100%;
`

export const StyledSearchBar = styled.input`
	width: 100%;
	min-height: var(--spacing-12);
	padding-inline: var(--spacing-4);
	padding-block: 0;
	font-size: var(--text-md);
	font-family: var(--font-family);
	background-color: var(--bg-primary);
	color: var(--text-primary);
	border: 1px solid var(--border-secondary);
	border-radius: var(--radius-sm);
	transition: border-color var(--transition-default), box-shadow var(--transition-default);

	&:focus-visible,
	&:focus {
		outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
	}

	&:not(:focus-visible):not(:focus):not(:disabled):hover {
		border-color: var(--border-secondary_hover);
	}

	&:disabled {
    cursor: not-allowed;	
  }

	&::placeholder {
		color: var(--text-secondary);
	}
`
