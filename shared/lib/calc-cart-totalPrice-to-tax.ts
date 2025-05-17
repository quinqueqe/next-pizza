/**
 * Функция calcCartTotalPriceToTax вычисляет налог и общую стоимость корзины.
 *
 * @param {number} totalAmount - общая сумма корзины без налога
 * @returns {{totalTax: number, totalPrice: number}} объект, содержащий сумму налога и общую стоимость с налогом
 */
export const calcCartTotalPriceToTax = (totalAmount: number) => {
    const totalTax = Math.floor(totalAmount * 0.05)
    const totalPrice = totalAmount + totalTax

    return { totalTax, totalPrice }
}

