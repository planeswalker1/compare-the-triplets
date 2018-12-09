// pseudo code:
// task:
// given two arrays of numbers
// Create a function that returns an array of two numbers
// the first being Angel's comparison points and the second being Brian's comparison points

// we have two arrays: a and b
// create an array, c, with total comparison points for each person
// compare both arrays
// if a[0] > b[0] add 1 to c[0]
// if a[0] < b[0] add 1 to c[1]
// if a[0] = b[0] do nothing
// return c

// return comparison points in array format
function returnComparisonPoints (a, b) {
  // comparison points array
  let c = [0, 0];

  // compare a[i] and b[i] and add a counter to respective c array index
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      c[0] = c[0] + 1;
      // console.log('hit, a gets a point');
      // console.log(c);
    } else if (a[i] < b[i]) {
      c[1] = c[1] + 1;
      // console.log('hit, b gets a point');
      // console.log(c);
    }
  }
  // console.log('all done');
  // console.log('here is c: ' + c);
  return c;
}

returnComparisonPoints([2,2,4], [1, 2, 3]);