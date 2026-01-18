import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './components/layout'
import { SkipLink } from './components/SEO/SkipLink'

export function Layout() {
	return (
		<div className='app-layout'>
			<SkipLink />
			<ScrollRestoration />
			<Header />
			<main id='main-content'>
				<Outlet />
			</main>
		</div>
	)
}
