import {
	Container,
	ProductsGroupList,
	// Filter,
	Title,
	TopBar,
} from '@/components/shared'
import prisma from '@/prisma/prisma'


const Home = async () => {
	const categories = await prisma?.category.findMany({
		include: {
			products: {
				include: {
					ingredients: true,
				},
			},
		},
	})

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
			<TopBar data={categories}/>

			<Container>
				{/* <div className='flex justify-between pt-10'> */}
				<div className='pt-10'>
					{/* <Filter /> */}
					<div className='flex flex-col gap-5'>
						{categories?.map(
							(category, i) =>
								category.products.length > 0 && (
									<ProductsGroupList
										key={i}
										title={category.name}
										products={category.products}
										className=''
										categoryId={category.id}
									/>
								)
						)}
					</div>
				</div>
			</Container>
		</>
	)
}

export default Home
