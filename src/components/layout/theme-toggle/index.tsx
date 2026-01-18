import { IconContext } from 'react-icons'
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useTheme } from '@/contexts/ThemeContext'
import { ToggleButton } from './ThemeToggle.styled'

export const ThemeToggle = () => {
	const { mode, toggleTheme } = useTheme()

	return (
		<ToggleButton onClick={toggleTheme}>
			<IconContext.Provider
				value={{
					size: '20',
				}}
			>
				{mode === 'light' ? <BsFillSunFill /> : <BsMoonStarsFill />}
			</IconContext.Provider>
		</ToggleButton>
	)
}
