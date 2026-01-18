import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { Button, Text } from '@/components'
import { StyledPaginationWrapper } from './Pagination.styled'
import type { PropTypes } from './Pagination.types'

export function Pagination({
	currentPage,
	totalPages,
	totalItems,
	onPageChange,
	itemsPerPage = 12,
}: PropTypes) {
	if (totalPages <= 1) return null

	const canGoPrev = currentPage > 1
	const canGoNext = currentPage < totalPages

	return (
		<StyledPaginationWrapper>
			<Button
				variant='secondary'
				iconStart={<FaChevronLeft />}
				onClick={() => onPageChange(currentPage - 1)}
				disabled={!canGoPrev}
			/>
			<Text>
				Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
				{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}{' '}
				results
			</Text>
			<Button
				variant='secondary'
				iconStart={<FaChevronRight />}
				onClick={() => onPageChange(currentPage + 1)}
				disabled={!canGoNext}
			/>
		</StyledPaginationWrapper>
	)
}
