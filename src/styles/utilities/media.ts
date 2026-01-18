import { css } from '@emotion/react'
import { theme } from '../theme'

type Breakpoint = keyof typeof theme.breakpoints

export const media = {
	from: (breakpoint: Breakpoint) =>
		`@media (min-width: ${theme.breakpoints[breakpoint]})`,
	until: (breakpoint: Breakpoint) =>
		`@media (max-width: calc(${theme.breakpoints[breakpoint]} - 0.0625rem))`,
}

const breakpoints = Object.keys(theme.breakpoints) as Breakpoint[]

const generateDisplayUtilities = () =>
	breakpoints
		.map(
			(bp) => `
			.hide-from-${bp} { ${media.from(bp)} { display: none !important; } }
			.hide-until-${bp} { ${media.until(bp)} { display: none !important; } }
			.show-from-${bp} { display: none !important; ${media.from(bp)} { display: block !important; } }
			.show-until-${bp} { display: block !important; ${media.from(bp)} { display: none !important; } }
		`,
		)
		.join('')

const generateFlexUtilities = () =>
	breakpoints
		.map(
			(bp) => `
			.flex-row-from-${bp} { ${media.from(bp)} { flex-direction: row !important; } }
			.flex-col-from-${bp} { ${media.from(bp)} { flex-direction: column !important; } }
			.flex-row-until-${bp} { ${media.until(bp)} { flex-direction: row !important; } }
			.flex-col-until-${bp} { ${media.until(bp)} { flex-direction: column !important; } }
		`,
		)
		.join('')

export const mediaUtils = css`
	${generateDisplayUtilities()}
	${generateFlexUtilities()}
`
