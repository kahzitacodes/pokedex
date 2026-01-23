export function formatPokemonNumber(id: number): string {
	return String(id).padStart(4, '0')
}

export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1)
}
