import type { PokemonType } from '@/types'

export type StyledProps = {
	color?: PokemonType
}

export type PropTypes = {
	label: string
} & StyledProps
