import { StyledContainer } from './Container.styled'

export type ContainerProps = React.ComponentProps<'div'>

export function Container({ children, ...props }: ContainerProps) {
	return <StyledContainer {...props}>{children}</StyledContainer>
}
