import { TbArrowLeft } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { Button, Container, EmptyState } from '@/components'

export function NotFoundPage() {
	const navigate = useNavigate()
	return (
		<Container>
			<EmptyState
				title='Page not found'
				description="Sorry, we couldn't find the page you're loking for."
				action={
					<Button
						variant='secondary'
						iconStart={<TbArrowLeft />}
						onClick={() => navigate('/')}
					>
						Back to home
					</Button>
				}
			/>
		</Container>
	)
}
