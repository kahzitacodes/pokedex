import { css } from '@emotion/react'
import { theme } from '../theme'

const generateGapUtilities = () => {
	const spacingKeys = Object.keys(theme.spacings)
	let gapClasses = ''
	let rowGapClasses = ''
	let columnGapClasses = ''

	spacingKeys.forEach((key) => {
		const className = key.toString().replace('.', '_')
		gapClasses += `.gap-${className} { gap: var(--spacing-${className}); }\n  `
		rowGapClasses += `.gap-y-${className} { row-gap: var(--spacing-${className}); }\n  `
		columnGapClasses += `.gap-x-${className} { column-gap: var(--spacing-${className}); }\n  `
	})

	return `
  /* Gap Utilities */
  ${gapClasses}
  /* Row Gap */
  ${rowGapClasses}
  /* Column Gap */
  ${columnGapClasses}`
}

export const flexboxUtils = css`
  /* Display */
  .flex { display: flex; }
  .inline-flex { display: inline-flex; }

  /* Flex Direction */
  .flex-row { flex-direction: row; }
  .flex-row-reverse { flex-direction: row-reverse; }
  .flex-col { flex-direction: column; }
  .flex-col-reverse { flex-direction: column-reverse; }

  /* Flex Wrap */
  .flex-wrap { flex-wrap: wrap; }
  .flex-wrap-reverse { flex-wrap: wrap-reverse; }
  .flex-nowrap { flex-wrap: nowrap; }

  /* Justify Content (Main Axis) */
  .justify-start { justify-content: flex-start; }
  .justify-end { justify-content: flex-end; }
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .justify-evenly { justify-content: space-evenly; }

  /* Align Items (Cross Axis) */
  .items-start { align-items: flex-start; }
  .items-end { align-items: flex-end; }
  .items-center { align-items: center; }
  .items-baseline { align-items: baseline; }
  .items-stretch { align-items: stretch; }

  /* Align Self */
  .self-auto { align-self: auto; }
  .self-start { align-self: flex-start; }
  .self-end { align-self: flex-end; }
  .self-center { align-self: center; }
  .self-stretch { align-self: stretch; }
  .self-baseline { align-self: baseline; }

  /* Align Content (Multi-line) */
  .content-start { align-content: flex-start; }
  .content-end { align-content: flex-end; }
  .content-center { align-content: center; }
  .content-between { align-content: space-between; }
  .content-around { align-content: space-around; }
  .content-evenly { align-content: space-evenly; }
  .content-stretch { align-content: stretch; }

  /* Flex Grow & Shrink */
  .flex-1 { flex: 1 1 0%; }
  .flex-2 { flex: 2 2 0%; }
  .flex-3 { flex: 3 3 0%; }
  .flex-auto { flex: 1 1 auto; }
  .flex-initial { flex: 0 1 auto; }
  .flex-none { flex: none; }
  .grow { flex-grow: 1; }
  .grow-0 { flex-grow: 0; }
  .shrink { flex-shrink: 1; }
  .shrink-0 { flex-shrink: 0; }

  ${generateGapUtilities()}
`
