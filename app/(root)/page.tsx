import {
	Container,
	ProductsGroupList,
	// Filter,
	Title,
	TopBar,
	Stories,
} from '@/shared/components/shared'
import prisma from '@/prisma/prisma'

const HomePage = async () => {
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
			<TopBar data={categories.filter(cat => cat.products.length > 0)} />

			<Stories />

			<Container>
				<div className='pt-10'>
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

export default HomePage
