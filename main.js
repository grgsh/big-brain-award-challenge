export default function (arr) {
  //
  // Your code goes here...
  //

  const sortedArray = arr.sort((a, b) => {
    if (a == 0) return 1;
    if (b == 0) return -1;
    return a - b;
  });
  console.log(sortedArray);
  return sortedArray;
}
