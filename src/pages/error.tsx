import { TbArrowLeft } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { Button, Container, EmptyState } from '@/components'

export function ErrorPage() {
	const navigate = useNavigate()
	return (
		<Container className='h-screen flex items-center justify-center'>
			<EmptyState
				title='Oops!'
				description='Something went wrong. Please try again later'
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
