export default function (arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      if (i !== j) {
        arr[i++] = arr[j];
        arr[j] = 0;
      } else {
        i++;
      }
    }
  }
  return arr;
}