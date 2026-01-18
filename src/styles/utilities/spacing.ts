import { css } from '@emotion/react'
import { theme } from '../theme'

const generateUtilities = (
	property: string,
	prefixes: {
		all: string
		block: string
		inline: string
		top: string
		bottom: string
		left: string
		right: string
	},
) => {
	return (
		Object.entries(theme.spacings) as [
			string,
			string | number,
		][]
	)
		.map(([key, value]) => {
			const className = key.toString().replace('.', '_')

			return `
			.${prefixes.all}-${className} { ${property}: ${value}; }
			.${prefixes.block}-${className} { ${property}-block: ${value}; }
			.${prefixes.inline}-${className} { ${property}-inline: ${value}; }
			.${prefixes.top}-${className} { ${property}-top: ${value}; }
			.${prefixes.bottom}-${className} { ${property}-bottom: ${value}; }
			.${prefixes.left}-${className} { ${property}-left: ${value}; }
			.${prefixes.right}-${className} { ${property}-right: ${value}; }`
		})
		.join('')
}

export const spacingUtils = css`
  /* Padding */
  ${generateUtilities('padding', {
		all: 'p',
		block: 'py',
		inline: 'px',
		top: 'pt',
		bottom: 'pb',
		left: 'pl',
		right: 'pr',
	})}

  /* Margin */
  ${generateUtilities('margin', {
		all: 'm',
		block: 'my',
		inline: 'mx',
		top: 'mt',
		bottom: 'mb',
		left: 'ml',
		right: 'mr',
	})}

	.w-full { width: 100%;}

	.h-full { height: 100%;}
	.h-screen{ height: 100vh;}
`
