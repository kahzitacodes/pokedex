export interface PaginationResult<T> {
	items: T[]
	totalPages: number
	currentPage: number
	totalItems: number
	startIndex: number
	endIndex: number
}
