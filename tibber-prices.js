const todayValues = data.data.viewer.homes[0].currentSubscription.priceInfo.today.map((item) => item.total)
const tomorrowValues = data.data.viewer.homes[0].currentSubscription.priceInfo.tomorrow.map((item) => item.total)

return {
	todayValues,
	tomorrowValues
}