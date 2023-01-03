const data = local("http_data")
const parsedData = data.data.viewer.homes[0].currentSubscription.priceInfo.today.map((item) => item.total)
var stringValue = parsedData.join(",")
