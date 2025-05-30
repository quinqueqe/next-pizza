export const cartItem = {
	cartId: 1, // к корзине 1 будет привязан этот товар
	quantity: 2, // кол-во (count)
	productItemId: 1, // вариация продукта
	ingredients: {
		connect: [{ id: 1 }, { id: 2 }, { id: 3 }], // обрщается уже к сохраненным данным в ingredients и добавляет их сюда по id
	},
}
