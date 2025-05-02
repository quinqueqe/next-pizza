import {
	Container,
	Filter,
	Title,
	TopBar,
	ProductsGroupList,
} from '@/components/shared'


const Home = () => {
	const pizzas = [
		{
			id: 0,
			imageUrl:
				'https://i.postimg.cc/ydwm5Gd9/11ee7d610e8bbb248f31270be742b4bd.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
		{
			id: 1,
			imageUrl:
				'https://i.postimg.cc/ydwm5Gd9/11ee7d610e8bbb248f31270be742b4bd.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 449,
		},
		{
			id: 2,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 399,
		},
		{
			id: 3,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
		{
			id: 332,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
		{
			id: 332,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
	]
	const tovars = [
		{
			id: 0,
			imageUrl:
				'https://i.postimg.cc/ydwm5Gd9/11ee7d610e8bbb248f31270be742b4bd.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
		{
			id: 1,
			imageUrl:
				'https://i.postimg.cc/ydwm5Gd9/11ee7d610e8bbb248f31270be742b4bd.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 449,
		},
		{
			id: 2,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 399,
		},
		{
			id: 3,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
		{
			id: 332,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
		{
			id: 332,
			imageUrl: 'https://i.postimg.cc/x1STsh4q/image.avif',
			name: 'Сырный цыпленок',
			desc: 'Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок',
			price: 395,
		},
	]
	return (
		<>
			<div className='bg-white shadow-[0_4px_24px_-2px_rgba(0,0,0,0.08)]'>
				<Container>
					<Title
						text='Все пиццы'
						size='xl'
						className='font-extrabold pt-10 pb-4'
					/>
				</Container>
			</div>
			<TopBar />

			<Container>
				<div className='flex gap-[80px] pt-10'>
					<Filter />
					<div className='flex flex-col gap-20'>
						<ProductsGroupList
							title='Пиццы'
							products={pizzas}
							className=''
							categoryId={0}
						/>
						<ProductsGroupList
							title='Комбо'
							products={tovars}
							className=''
							categoryId={1}
						/>
					</div>
				</div>
			</Container>
		</>
	)
}

export default Home
