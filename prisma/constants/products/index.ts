import { Breakfasts } from './breakfasts'
import { Appetizers } from './appetizers'
import { Cocktails } from './cocktails'
import { Coffee } from './coffee'
import { Drinks } from './drinks'
import { Desserts } from './desserts'

export const products = [
	...Appetizers,
	...Breakfasts,
	...Cocktails,
	...Coffee,
	...Drinks,
	...Desserts,
]
