var parsed_data = http_data.data.viewer.homes[0].currentSubscription.priceInfo.today.map((item) => item.total)
setGlobal("%parsed_data", parsed_data.join(","));
