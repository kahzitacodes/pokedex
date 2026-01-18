import type { PokemonType } from '@/types'

export type CardDirection = 'horizontal' | 'vertical'

export type PropTypes = {
	title: string
	recordId: number
	image?: string
	tags?: {
		color: PokemonType
		label: string
	}[]
	direction?: CardDirection
	onClick?: () => void
}
