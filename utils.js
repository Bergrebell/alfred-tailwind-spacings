export function findClosest({ tw_conversions_array, pixel_value }) {
  // By default that will be a big number
  var closestValue = Infinity;
  // We will store the index of the element
  var closestIndex = -1;
  for (var i = 0; i < tw_conversions_array.length; ++i) {
    var diff = Math.abs(tw_conversions_array[i].pixel - pixel_value);
    if (diff < closestValue) {
      closestValue = diff;
      closestIndex = i;
    }
  }
  return tw_conversions_array[closestIndex];
}
