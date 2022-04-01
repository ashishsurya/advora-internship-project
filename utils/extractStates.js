export function extractStates(rides) {
  var states = [];
  states = rides?.map((ride) => ride.state);
  states = [...new Set(states)];
  return states;
}

