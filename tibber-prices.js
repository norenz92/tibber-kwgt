let data = JSON.parse(global('http_data'))
var parsed_data = data.data.viewer.homes[0].currentSubscription.priceInfo.today.map((item) => item.total)
setGlobal("http_data", data);
