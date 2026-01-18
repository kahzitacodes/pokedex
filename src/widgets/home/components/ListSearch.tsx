import { useState } from 'react'
import { Button, SearchBar } from '@/components'
import { Container } from '@/components/layout'

export type ListSearchProps = {
	onSearch: (value: string) => void
	onSurpriseMe?: () => void
}

export function ListSearch({ onSearch, onSurpriseMe }: ListSearchProps) {
	const [inputValue, setInputValue] = useState('')

	const handleSearch = () => {
		onSearch(inputValue)
	}

	return (
		<div className='flex items-center bg-secondary py-6'>
			<Container>
				<div className='flex items-end gap-4'>
					<SearchBar
						label='Name or number'
						placeholder='Picachu, #0025'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onSearch={handleSearch}
					/>
					<Button
						variant='secondary'
						className='shrink-0'
						onClick={onSurpriseMe}
					>
						Surprise me
					</Button>
				</div>
			</Container>
		</div>
	)
}
