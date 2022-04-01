export function extractPreviousRides(rides) {
  var previousrides = [];
  previousrides = rides?.map(ride => {
    const a = new Date();
    const b = new Date(ride.date)


    if (b.getTime() < a.getTime()) {
      return ride;
    }

  })

  return previousrides;
}