export const currencyFormatter = (amount, currency='UGX', ISOLanguageCode='en-US') => {
  const formatter = new Intl.NumberFormat(ISOLanguageCode, {
      // style: 'currency',
      currency: currency,
  });

  return formatter.format(amount)
}