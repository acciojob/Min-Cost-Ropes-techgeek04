function mincost(arr) {
 
  if (arr.length === 1) return 0;
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    const first = arr.shift();
    const second = arr.shift();
    const newRope = first + second;
    cost += newRope;
    let left = 0;
    let right = arr.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < newRope) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    arr.splice(left, 0, newRope);
  }

  return cost;
}

// do not edit below this line
module.exports = mincost;
