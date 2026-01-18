import { type CardDirection, Skeleton } from '@/components'

export type CardSkeletonProps = {
	direction?: CardDirection
}

export function CardSkeleton({ direction = 'vertical' }: CardSkeletonProps) {
	const isHorizontal = direction === 'horizontal'

	return (
		<Skeleton
			height='auto'
			borderRadius='var(--radius-lg)'
			noBackground
			className={`flex p-4 border-primary ${isHorizontal ? 'flex-row gap-5 items-center' : 'flex-col  gap-4'}`}
		>
			<Skeleton
				aspectRatio='1'
				borderRadius='var(--radius-md)'
				width={`${isHorizontal ? '12rem' : ''}`}
				height={`${isHorizontal ? '12rem' : ''}`}
				className={`${isHorizontal ? 'shrink-0' : ''}`}
			/>

			<div
				className={`flex w-full ${isHorizontal ? 'flex-row gap-6 items-center justify-between' : 'flex-col  gap-3'}`}
			>
				<div className='flex flex-col gap-2'>
					<Skeleton width='4.2rem' height='1.5rem' />
					<Skeleton
						width={`${isHorizontal ? '10rem' : '80%'}`}
						height='2.5rem'
					/>
				</div>

				<div className='flex flex-wrap gap-2'>
					<Skeleton
						width='6rem'
						height='2.8rem'
						borderRadius='var(--radius-xs)'
					/>
					<Skeleton
						width='6rem'
						height='2.8rem'
						borderRadius='var(--radius-xs)'
					/>
				</div>
			</div>
		</Skeleton>
	)
}
