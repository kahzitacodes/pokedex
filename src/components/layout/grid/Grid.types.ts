export type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 12

export type ResponsiveColumns = {
	xs?: Columns
	sm?: Columns
	md?: Columns
	lg?: Columns
	xl?: Columns
	'2xl'?: Columns
}

export type ResponsiveGap = {
	xs?: React.CSSProperties['gap']
	sm?: React.CSSProperties['gap']
	md?: React.CSSProperties['gap']
	lg?: React.CSSProperties['gap']
	xl?: React.CSSProperties['gap']
	'2xl'?: React.CSSProperties['gap']
}

export type PropTypes = {
	columns?: Columns | ResponsiveColumns
	gap?: React.CSSProperties['gap'] | ResponsiveGap
	rowGap?: string
	columnGap?: string
	className?: string
}
