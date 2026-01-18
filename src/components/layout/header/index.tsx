import { Heading } from '@/components/ui/heading/Heading'
import { Container } from '../container'
import { LanguageSelector } from '../language-selector'
import { ThemeToggle } from '../theme-toggle'
import { StyledHeader, StyledLogoLink } from './Header.styled'

export function Header() {
	return (
		<StyledHeader>
			<Container className='flex justify-between'>
				<StyledLogoLink href='/'>
					<Heading>Pokedex</Heading>
				</StyledLogoLink>

				<div className='flex items-center gap-2'>
					<LanguageSelector />
					<ThemeToggle />
				</div>
			</Container>
		</StyledHeader>
	)
}
