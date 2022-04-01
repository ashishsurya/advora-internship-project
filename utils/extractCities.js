export function extractCities(rides) {
  var cities = [];
  cities = rides?.map((ride) => ride.city);
  cities = [...new Set(cities)];
  return cities;
}
