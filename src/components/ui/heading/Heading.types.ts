type Size = 'h1' | 'h2' | 'h3'
type Color = 'primary' | 'secondary'
type Weight = 'normal' | 'medium' | 'semibold' | 'bold'
type As = 'h1' | 'h2' | 'h3'

export type PropTypes = {
	size?: Size
	color?: Color
	weight?: Weight
	as?: As
}
