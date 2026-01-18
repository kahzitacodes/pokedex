import { IconContext } from 'react-icons/lib'
import { StyledButton, StyledButtonText } from './Button.styled'
import type { PropTypes } from './Button.types'

export function Button(props: React.ComponentProps<'button'> & PropTypes) {
	const { children, iconStart, iconEnd, variant = 'primary', ...rest } = props
	const isIconOnly = !children && (!!iconStart || !!iconEnd)

	return (
		<StyledButton variant={variant} iconOnly={isIconOnly} {...rest}>
			<IconContext.Provider
				value={{
					size: '20',
				}}
			>
				{iconStart && iconStart}
				{children && <StyledButtonText>{children}</StyledButtonText>}
				{iconEnd && iconEnd}
			</IconContext.Provider>
		</StyledButton>
	)
}
