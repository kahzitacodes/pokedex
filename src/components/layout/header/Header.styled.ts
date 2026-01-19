import styled from '@emotion/styled'
import { StyledHeading } from '@/components/ui/heading/Heading.styled'

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: var(--layer-menu);
  background-color: var(--surface-dark);
  color: var(--text-on-dark);
  padding: var(--spacing-5) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const StyledLogoLink = styled.a`
  text-decoration: none;
  color: inherit;

  ${StyledHeading} {
    color: inherit;
  }
`
