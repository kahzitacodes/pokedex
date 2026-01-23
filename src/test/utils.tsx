import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ReactElement, ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { theme } from '@/styles'

function createTestQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
				gcTime: 0,
			},
		},
	})
}

interface WrapperProps {
	children: ReactNode
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
	initialEntries?: string[]
	withRouter?: boolean
	withTheme?: boolean
	withQueryClient?: boolean
}

function AllProviders({ children }: WrapperProps) {
	const queryClient = createTestQueryClient()

	return (
		<QueryClientProvider client={queryClient}>
			<EmotionThemeProvider theme={theme}>
				<ThemeProvider>
					<MemoryRouter>{children}</MemoryRouter>
				</ThemeProvider>
			</EmotionThemeProvider>
		</QueryClientProvider>
	)
}

function customRender(
	ui: ReactElement,
	{
		initialEntries = ['/'],
		withRouter = true,
		withTheme = true,
		withQueryClient = true,
		...options
	}: CustomRenderOptions = {},
) {
	function Wrapper({ children }: WrapperProps) {
		let wrapped = children

		if (withQueryClient) {
			const queryClient = createTestQueryClient()
			wrapped = (
				<QueryClientProvider client={queryClient}>
					{wrapped}
				</QueryClientProvider>
			)
		}

		if (withTheme) {
			wrapped = (
				<EmotionThemeProvider theme={theme}>
					<ThemeProvider>{wrapped}</ThemeProvider>
				</EmotionThemeProvider>
			)
		}

		if (withRouter) {
			wrapped = (
				<MemoryRouter initialEntries={initialEntries}>{wrapped}</MemoryRouter>
			)
		}

		return <>{wrapped}</>
	}

	return {
		user: userEvent.setup(),
		...render(ui, {
			wrapper: Wrapper,
			...options,
		}),
	}
}

export * from '@testing-library/react'
export { userEvent }

export { customRender as render, AllProviders, createTestQueryClient }
