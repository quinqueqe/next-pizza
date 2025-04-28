import { Container, Title, Filter } from '@/components/shared'

const Home = () => {
	return (
		<>
			<Container className='pt-10 h-3000'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
				<Filter />
			</Container>
		</>
	)
}

export default Home
