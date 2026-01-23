import { Divider, Skeleton } from '@/components'
import { Container, Grid } from '@/components/layout'

export function DetailsSkeleton() {
	return (
		<Container className='py-8'>
			<Grid
				columns={{
					xs: 1,
					md: 2,
				}}
				gap={{
					xs: 'var(--spacing-8)',
					md: 'var(--spacing-12)',
				}}
			>
				<div className='flex items-start justify-center'>
					<Skeleton
						width='100%'
						height='auto'
						aspectRatio='1'
						borderRadius='var(--radius-lg)'
					/>
				</div>

				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-3'>
						<Skeleton width='6rem' height='2rem' />
						<Skeleton width='20rem' height='3.6rem' />
						<Skeleton width='12rem' height='2rem' />
					</div>

					<div className='flex flex-col gap-3'>
						<Skeleton width='4rem' height='1.6rem' />
						<div className='flex gap-2'>
							<Skeleton width='6rem' height='2.8rem' />
							<Skeleton width='6rem' height='2.8rem' />
						</div>
					</div>

					<div className='flex flex-col gap-3'>
						<Skeleton width='8rem' height='1.6rem' />
						<div className='flex flex-col gap-2'>
							<Skeleton width='100%' height='1.6rem' />
							<Skeleton width='30%' height='1.6rem' />
						</div>
					</div>

					<Divider />
					<div className='flex flex-col gap-3'>
						<Skeleton width='6rem' height='1.6rem' />
						<Grid columns={2}>
							<Skeleton width='100%' height='4rem' />
							<Skeleton width='100%' height='4rem' />
						</Grid>
					</div>
					<Divider />

					<div className='flex flex-col gap-3'>
						<Skeleton width='8rem' height='1.6rem' />
						<div className='flex flex-col gap-4'>
							{[...Array(6)].map((_, i) => (
								<Skeleton
									key={`skeleton-item-${i.toString()}`}
									width='100%'
									height='1.6rem'
								/>
							))}
						</div>
					</div>

					<div className='flex flex-col gap-3'>
						<Skeleton width='6rem' height='1.6rem' />
						<div className='flex flex-col gap-2'>
							<Skeleton width='12rem' height='1.6rem' />
							<Skeleton width='10rem' height='1.6rem' />
						</div>
					</div>
				</div>
			</Grid>
		</Container>
	)
}
