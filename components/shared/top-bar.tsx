// Компонент TopBar.tsx
import { Category } from '@prisma/client'
import { Categories, Container, Sort } from '.'

interface Props {
	data : Category[]
}

export const TopBar = ({data} : Props) => {
	return (
		<div className='sticky top-0 z-20 bg-white shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)]'>
			<Container className='flex justify-between items-center py-3'>
				<Categories categories={data}/>
				<Sort />
			</Container>
		</div>
	)
}
