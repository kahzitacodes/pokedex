import styled from '@emotion/styled'

export const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--surface-dark);
  color: var(--text-on-dark);
  padding: var(--spacing-3) var(--spacing-4);
  text-decoration: none;
  z-index: 100;
  border-radius: 0 0 var(--radius-md) 0;
  font-weight: var(--font-semibold);

  &:focus {
    top: 0;
    outline: 2px solid var(--primary-500);
    outline-offset: 2px;
  }
`
