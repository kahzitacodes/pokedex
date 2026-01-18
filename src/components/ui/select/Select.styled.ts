import styled from '@emotion/styled'
import * as SelectPrimitive from '@radix-ui/react-select'

export const StyledTrigger = styled(SelectPrimitive.Trigger)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-2);
	width: 100%;
	min-height: var(--spacing-12);
	padding-inline: var(--spacing-4);
	padding-block: 0;
	font-size: var(--text-md);
	font-family: var(--font-family);
	background-color: var(--bg-primary);
	color: var(--text-primary);
	border: 1px solid var(--border-secondary);
	border-radius: var(--radius-sm);
	transition: border-color var(--transition-default), box-shadow var(--transition-default);
  white-space: nowrap;
  &:focus-visible,
  &:focus {
    outline: none;
    border-color: hsl(var(--ring));
    box-shadow: 0 0 0 2px hsl(var(--ring) / 0.2);
  }
`

export const StyledContent = styled(SelectPrimitive.Content)`
  background-color: var(--bg-primary);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  border: 1px solid var(--border-secondary);
  z-index: var(--layer-overlay);
`

export const StyledViewport = styled(SelectPrimitive.Viewport)`
  padding: var(--spacing-1_5);
  gap: var(--spacing-1);
`

export const StyledItem = styled(SelectPrimitive.Item)`
  padding: var(--spacing-2) var(--spacing-4);
  padding-inline-end: var(--spacing-10);
  border-radius: var(--radius-sm);
  cursor: pointer;
  outline: none;
  font-size: var(--text-md);
	font-family: var(--font-family);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-0_5);
  display: flex;
  align-items: center;
  position: relative;

  &:last-of-type {
    margin-bottom: 0;
  }

  &[data-state="checked"],
  &[data-highlighted] {
    background-color: var(--bg-tertiary);
    color: var(--text-primary);
  }
`

export const StyledIcon = styled(SelectPrimitive.Icon)`
  color: var(--text-secondary);
  display: flex;
`

export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  color: var(--text-primary);
  position: absolute;
  right: var(--spacing-4);
`
