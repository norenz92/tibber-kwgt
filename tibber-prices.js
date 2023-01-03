http_data = http_data.data.viewer.homes[0].currentSubscription.priceInfo.today.map((item) => item.total)

return http_data.join(",")
