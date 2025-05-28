export default function (arr) {
  const sortedArray = arr.sort((a, b) => {
    if (a == 0) return 1;
    if (b == 0) return -1;
    return a - b;
  });
  return sortedArray;
}
