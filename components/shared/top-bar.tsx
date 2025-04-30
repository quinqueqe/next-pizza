// Компонент TopBar.tsx
import { Categories, Container, Sort } from '.'

export const TopBar = () => {
	return (
		<div className='sticky top-0 z-20 bg-white shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)]'>
			<Container className='flex justify-between items-center py-3'>
				<Categories />
				<Sort />
			</Container>
		</div>
	)
}
