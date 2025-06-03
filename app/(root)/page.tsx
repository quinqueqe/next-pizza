import {
	Container,
	ProductsGroupList,
	TopBar,
	Stories,
	CartButtonMobile,
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

	if (!categories) {
		throw new Error('Не удалось запустить базу данных')
	}

	return (
		<>
			<TopBar data={categories.filter(cat => cat.products.length > 0)} />

			<Stories />

			<Container>
				<div className='pt-10 relative'>
					<div className='flex flex-col gap-8'>
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
					<CartButtonMobile />
				</div>
			</Container>
		</>
	)
}

export default HomePage
