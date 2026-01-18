import type * as SelectPrimitive from '@radix-ui/react-select'

export type SelectOption = {
	value: string
	label: string
	disabled?: boolean
}

export type SelectProps = {
	options: SelectOption[]
	placeholder?: string
	className?: string
} & React.ComponentProps<typeof SelectPrimitive.Root>
