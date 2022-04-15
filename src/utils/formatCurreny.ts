export const formatCurrency = (currency: number): any => {
  return currency.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}
