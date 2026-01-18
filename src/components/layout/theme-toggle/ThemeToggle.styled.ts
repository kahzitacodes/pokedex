import styled from '@emotion/styled'

export const ToggleButton = styled.button`
  height: 4.8rem;
  width: 4.8rem;
  background-color: var(--surface-dark);
  color: var(--text-on-dark);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--text-md);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all var(--transition-fast);

  &:hover {
    background-color: var(--surface-dark_hover);
  }

  &:active {
    transform: scale(0.95);
  }
`
