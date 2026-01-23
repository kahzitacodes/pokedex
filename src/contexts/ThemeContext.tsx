import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
	mode: ThemeMode
	toggleTheme: () => void
	setTheme: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
	children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [mode, setMode] = useState<ThemeMode>(() => {
		const savedTheme = localStorage.getItem('theme') as ThemeMode | null
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches
		return savedTheme || (prefersDark ? 'dark' : 'light')
	})

	useEffect(() => {
		localStorage.setItem('theme', mode)
		document.documentElement.setAttribute('data-theme', mode)
	}, [mode])

	const toggleTheme = () => {
		setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
	}

	const setTheme = (newMode: ThemeMode) => {
		setMode(newMode)
	}

	return (
		<ThemeContext.Provider
			value={{
				mode,
				toggleTheme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider')
	}
	return context
}
