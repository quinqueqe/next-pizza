export const ingredients = [
	{
		name: 'Сырный бортик',
		price: 179,
		imageUrl:
			'/assets/images/ingredients/cheese-board.png',
	},
	{
		name: 'Сливочная моцарелла',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/creamy-mozzarella.png',
	},
	{
		name: 'Сыры чеддер и пармезан',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/cheddar-and-parmesan-cheeses.png',
	},
	{
		name: 'Острый перец халапеньо',
		price: 59,
		imageUrl:
			'/assets/images/ingredients/hot-jalapeño-peppers.png',
	},
	{
		name: 'Нежный цыпленок',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/tender-chicken.png',
	},
	{
		name: 'Шампиньоны',
		price: 59,
		imageUrl:
			'/assets/images/ingredients/champignons.png',
	},
	{
		name: 'Бекон',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/bacon.png',
	},
	{
		name: 'Ветчина',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/ham.png',
	},
	{
		name: 'Пикантная пепперони',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/spicy-pepperoni.png',
	},
	{
		name: 'Острая чоризо',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/spicy-chorizo.png',
	},
	{
		name: 'Маринованные огурчики',
		price: 59,
		imageUrl:
			'/assets/images/ingredients/pickles.png',
	},
	{
		name: 'Свежие томаты',
		price: 59,
		imageUrl:
			'/assets/images/ingredients/fresh-tomatoes.png',
	},
	{
		name: 'Красный лук',
		price: 59,
		imageUrl:
			'/assets/images/ingredients/red-onion.png',
	},
	{
		name: 'Сочные ананасы',
		price: 59,
		imageUrl:
			'/assets/images/ingredients/juicy-pineapples.png',
	},
	{
		name: 'Итальянские травы',
		price: 39,
		imageUrl:
			'/assets/images/ingredients/italian-herbs.png',
	},
	{
		name: 'Сладкий перец',
		price: 59,
		imageUrl:
			'/assets/images/ingredients/sweet-peppers.png',
	},
	{
		name: 'Кубики брынзы',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/dice-of-bryndza.png',
	},
	{
		name: 'Митболы',
		price: 79,
		imageUrl:
			'/assets/images/ingredients/mitballs.png',
	},
].map((obj, i) => ({ id: i + 1, ...obj })) // добавление пункта id к каждому объекту массива (в каждом элементе id будет больше на 1 чем в предыдущем)