export type StyledProps = {
	variant?: 'primary' | 'secondary'
}

export type PropTypes = React.ComponentProps<'button'> & {
	iconStart?: React.ReactNode
	iconEnd?: React.ReactNode
	children?: string
} & StyledProps
