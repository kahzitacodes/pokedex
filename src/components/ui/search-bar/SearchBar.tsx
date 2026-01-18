import { IoSearch } from 'react-icons/io5'
import { Button } from '../button'
import { Label } from '../label'
import * as S from './SearchBar.styled'
import type { PropTypes } from './SearchBar.types'

export function SearchBar({
	placeholder = '',
	id = 'search',
	label,
	onSearch,
	onKeyDown,
	...rest
}: PropTypes) {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSearch?.()
		}
		onKeyDown?.(e)
	}

	return (
		<S.StyledWrapper>
			{label && <Label htmlFor={id}>{label}</Label>}
			<div className='flex gap-2'>
				<S.StyledSearchBar
					id={id}
					type='text'
					placeholder={placeholder}
					onKeyDown={handleKeyDown}
					{...rest}
				/>
				<Button iconStart={<IoSearch />} onClick={onSearch} />
			</div>
		</S.StyledWrapper>
	)
}
