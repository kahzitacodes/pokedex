import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { GlobalStyles, theme } from './styles'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 min
			refetchOnWindowFocus: false,
		},
	},
})

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<EmotionThemeProvider theme={theme}>
					<LanguageProvider>
						<ThemeProvider>
							<GlobalStyles />
							{children}
						</ThemeProvider>
					</LanguageProvider>
				</EmotionThemeProvider>
			</QueryClientProvider>
		</HelmetProvider>
	)
}
