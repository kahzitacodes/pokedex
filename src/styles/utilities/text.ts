import { css } from '@emotion/react'

export const textUtils = css`
	/* Text Alignment */
	.text-center { text-align: center; }
	.text-start { text-align: start; }
	.text-end { text-align: end; }

	/* Text Overflow */
	.text-truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* Text Transform */
	.capitalize { text-transform: capitalize; }
	.uppercase { text-transform: uppercase; }
	.lowercase { text-transform: lowercase; }

	/* Font Size */
	.text-xs { font-size: var(--text-xs); line-height: var(--text-xs_line-height); }
	.text-sm { font-size: var(--text-sm); line-height: var(--text-sm_line-height); }
	.text-md { font-size: var(--text-md); line-height: var(--text-md_line-height); }
	.text-lg { font-size: var(--text-lg); line-height: var(--text-lg_line-height); }
	.heading-sm { font-size: var(--heading-sm); line-height: var(--heading-sm_line-height); }
	.heading-md { font-size: var(--heading-md); line-height: var(--heading-md_line-height); }
	.heading-lg { font-size: var(--heading-lg); line-height: var(--heading-lg_line-height); }

	/* Font Weight */
	.font-light { font-weight: var(--font-light); }
	.font-normal { font-weight: var(--font-normal); }
	.font-medium { font-weight: var(--font-medium); }
	.font-semibold { font-weight: var(--font-semibold); }
	.font-bold { font-weight: var(--font-bold); }
`
