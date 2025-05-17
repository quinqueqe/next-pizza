/**
 * Функция calcCartTotalPriceToTax вычисляет налог и общую стоимость корзины.
 *
 * @param {number} totalAmount - общая сумма корзины без налога
 * @returns {{totalTax: number, totalPrice: number}} объект, содержащий сумму налога и общую стоимость с налогом
 */
export const calcCartTotalPriceToTax = (totalAmount: number, discount: number) => {
    const decimalPercent = discount / 100;
    const totalTax = Math.floor(totalAmount * 0.05)
    const totalWithTax = totalAmount + totalTax; 
    const totalPrice = totalWithTax * (1 - decimalPercent)

    return { totalTax, totalPrice }
}

