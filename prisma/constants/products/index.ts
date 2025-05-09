import { Breakfasts } from './breakfasts'
import { Appetizers } from './appetizers'
import { Cocktails } from './cocktails'
import { Coffee } from './coffee'

export const products = [...Appetizers, ...Breakfasts, ...Cocktails, ...Coffee]
