import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@/test'
import { Pagination } from '../Pagination'

describe('Pagination', () => {
	const defaultProps = {
		currentPage: 1,
		totalPages: 5,
		totalItems: 50,
		onPageChange: vi.fn(),
		itemsPerPage: 12,
	}

	describe('rendering', () => {
		it('renders pagination when totalPages > 1', () => {
			render(<Pagination {...defaultProps} />)

			expect(screen.getByText(/Showing/)).toBeInTheDocument()
		})

		it('returns null when totalPages is 1', () => {
			const { container } = render(
				<Pagination {...defaultProps} totalPages={1} totalItems={10} />,
			)

			expect(container).toBeEmptyDOMElement()
		})

		it('returns null when totalPages is 0', () => {
			const { container } = render(
				<Pagination {...defaultProps} totalPages={0} totalItems={0} />,
			)

			expect(container).toBeEmptyDOMElement()
		})
	})

	describe('text display', () => {
		it('displays correct range for first page', () => {
			render(<Pagination {...defaultProps} currentPage={1} />)

			expect(
				screen.getByText(/Showing 1 to 12 of 50 results/),
			).toBeInTheDocument()
		})

		it('displays correct range for middle page', () => {
			render(<Pagination {...defaultProps} currentPage={2} />)

			expect(
				screen.getByText(/Showing 13 to 24 of 50 results/),
			).toBeInTheDocument()
		})

		it('displays correct range for last page (partial)', () => {
			render(<Pagination {...defaultProps} currentPage={5} totalItems={50} />)

			// Page 5 with 12 items per page: 49-50 (only 2 items)
			expect(
				screen.getByText(/Showing 49 to 50 of 50 results/),
			).toBeInTheDocument()
		})

		it('displays correct range with custom itemsPerPage', () => {
			render(
				<Pagination
					{...defaultProps}
					currentPage={1}
					itemsPerPage={10}
					totalItems={25}
				/>,
			)

			expect(
				screen.getByText(/Showing 1 to 10 of 25 results/),
			).toBeInTheDocument()
		})
	})

	describe('button states', () => {
		it('disables previous button on first page', () => {
			render(<Pagination {...defaultProps} currentPage={1} />)

			const buttons = screen.getAllByRole('button')
			const prevButton = buttons[0]

			expect(prevButton).toBeDisabled()
		})

		it('enables previous button when not on first page', () => {
			render(<Pagination {...defaultProps} currentPage={2} />)

			const buttons = screen.getAllByRole('button')
			const prevButton = buttons[0]

			expect(prevButton).not.toBeDisabled()
		})

		it('disables next button on last page', () => {
			render(<Pagination {...defaultProps} currentPage={5} />)

			const buttons = screen.getAllByRole('button')
			const nextButton = buttons[1]

			expect(nextButton).toBeDisabled()
		})

		it('enables next button when not on last page', () => {
			render(<Pagination {...defaultProps} currentPage={1} />)

			const buttons = screen.getAllByRole('button')
			const nextButton = buttons[1]

			expect(nextButton).not.toBeDisabled()
		})
	})

	describe('interactions', () => {
		it('calls onPageChange with previous page when clicking prev button', async () => {
			const onPageChange = vi.fn()
			const { user } = render(
				<Pagination
					{...defaultProps}
					currentPage={3}
					onPageChange={onPageChange}
				/>,
			)

			const buttons = screen.getAllByRole('button')
			await user.click(buttons[0])

			expect(onPageChange).toHaveBeenCalledWith(2)
		})

		it('calls onPageChange with next page when clicking next button', async () => {
			const onPageChange = vi.fn()
			const { user } = render(
				<Pagination
					{...defaultProps}
					currentPage={3}
					onPageChange={onPageChange}
				/>,
			)

			const buttons = screen.getAllByRole('button')
			await user.click(buttons[1])

			expect(onPageChange).toHaveBeenCalledWith(4)
		})

		it('does not call onPageChange when clicking disabled prev button', async () => {
			const onPageChange = vi.fn()
			const { user } = render(
				<Pagination
					{...defaultProps}
					currentPage={1}
					onPageChange={onPageChange}
				/>,
			)

			const buttons = screen.getAllByRole('button')
			await user.click(buttons[0])

			expect(onPageChange).not.toHaveBeenCalled()
		})

		it('does not call onPageChange when clicking disabled next button', async () => {
			const onPageChange = vi.fn()
			const { user } = render(
				<Pagination
					{...defaultProps}
					currentPage={5}
					onPageChange={onPageChange}
				/>,
			)

			const buttons = screen.getAllByRole('button')
			await user.click(buttons[1])

			expect(onPageChange).not.toHaveBeenCalled()
		})
	})
})
