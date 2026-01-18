type Size = 'xs' | 'sm' | 'md' | 'lg'
type Color = 'primary' | 'secondary'
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

export type PropTypes = {
	size?: Size
	color?: Color
	weight?: Weight
	noLineHeight?: boolean
}
