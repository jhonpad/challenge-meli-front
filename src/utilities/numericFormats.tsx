export const currencyFormat = (
  currency: string,
  locale: string,
  value: number
): string => {
  const formatValue = Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(value)

  return formatValue
}

export const numberFormat = (
  locale: string,
  value: number
): string => {
  const formatValue = Intl.NumberFormat(locale).format(value)
  return formatValue
}
