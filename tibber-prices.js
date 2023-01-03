var parsed_data = http_data.data.viewer.homes[0].currentSubscription.priceInfo.today.map((item) => item.total)
var string_value = parsed_data.join(",")
