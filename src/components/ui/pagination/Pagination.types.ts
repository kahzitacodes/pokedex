export type PropTypes = {
	currentPage: number
	totalPages: number
	totalItems: number
	itemsPerPage?: number
	onPageChange: (page: number) => void
}
