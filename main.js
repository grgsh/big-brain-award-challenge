export default function (arr) {
  let writeIndex = 0;

  // Move non-zero elements to the front
  for (let readIndex = 0; readIndex < arr.length; readIndex++) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex++] = arr[readIndex];
    }
  }

  // Fill the rest with zeros
  while (writeIndex < arr.length) {
    arr[writeIndex++] = 0;
  }

  return arr;
}