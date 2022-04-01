export function getLength(arr) {
  var count = 0;
  for (var i = 0; i < arr?.length; i++) {
    if (arr[i]) {
      count++;
    }
  }

  return count;
}