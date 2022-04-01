export function calculateDistance(arr, n) {
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    new_arr.push(arr[i] - n < 0 ? -1 * (arr[i] - n) : arr[i] - n);
  }


  new_arr.sort((a, b) => a - b);
  return new_arr[0];
}
