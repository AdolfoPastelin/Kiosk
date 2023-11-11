export const formatMoney = (amount = 0) => {
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	})
}