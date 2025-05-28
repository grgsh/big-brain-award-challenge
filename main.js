/**
 * @param {number[]} arr
 * @returns {number[]}
 */
export default function answer(arr) {
  /** @type {number[]} */
  const zeros = [];
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];
    if (number === 0) {
      const [zero] = arr.splice(i, 1);
      zeros.splice(zeros.length, 0, zero);
      i -= 1;
    }
  }

  arr.splice(arr.length, 0, ...zeros);
  return arr;
}
