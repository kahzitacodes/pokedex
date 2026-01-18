import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './layout'
import { DetailsPage } from './pages/Details'
import { ErrorPage } from './pages/error'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/not-found'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/details/:id',
				element: <DetailsPage />,
			},
			{
				path: '/',
				element: <HomePage />,
			},
		],
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
])
