import styled from '@emotion/styled'

export const StyledEmptyState = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: var(--spacing-24) var(--spacing-4);
	gap: var(--spacing-6);
	text-align: center;
`

export const StyledIconWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 8rem;
	height: 8rem;
	border-radius: var(--radius-full);
	background-color: var(--bg-tertiary);
	color: var(--text-secondary);

	svg {
		width: 3rem;
		height: 3rem;
	}
`

export const StyledTextContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: var(--spacing-2);
	max-width: 36rem;
`
