const parsedData = http_data.data.viewer.homes[0].currentSubscription.priceInfo.today.map((item) => item.total)
var stringvalue = parsedData.join(",")
