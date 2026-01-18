import * as SelectPrimitive from '@radix-ui/react-select'
import { FaCaretDown } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa6'
import * as S from './Select.styled'
import type { SelectProps } from './Select.types'

export function Select({ options, placeholder, ...rest }: SelectProps) {
	return (
		<SelectPrimitive.Root {...rest}>
			<S.StyledTrigger>
				<SelectPrimitive.Value placeholder={placeholder} />
				<S.StyledIcon>
					<FaCaretDown size={20} />
				</S.StyledIcon>
			</S.StyledTrigger>
			<SelectPrimitive.Portal>
				<S.StyledContent position='popper' sideOffset={4}>
					<S.StyledViewport>
						{options.map((option) => (
							<S.StyledItem
								key={option.value}
								value={option.value}
								disabled={option.disabled}
							>
								<SelectPrimitive.ItemText>
									{option.label}
								</SelectPrimitive.ItemText>
								<S.StyledItemIndicator>
									<FaCheck />
								</S.StyledItemIndicator>
							</S.StyledItem>
						))}
					</S.StyledViewport>
				</S.StyledContent>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
}
