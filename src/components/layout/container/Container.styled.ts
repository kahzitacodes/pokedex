import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

export const StyledContainer = styled.div`
	max-width: var(--grid-container);
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	padding-left: var(--grid-gutter);
	padding-right: var(--grid-gutter);

	@media (min-width: ${theme.breakpoints.sm}) {
		padding-left: var(--spacing-0);
		padding-right: var(--spacing-0);
	}
`
