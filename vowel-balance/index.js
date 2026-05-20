function getVowelCount(str) {
  const vowels = /[aeiou]/i;
  let count = 0;
  for (const char of str) {
    if (vowels.test(char)) {
      count++;
    }
  }

  return count;
}

function isBalanced(str) {
  const middleChar = Math.floor(str.length / 2);
  const firstHalf = str.slice(0, middleChar);
  const secondHalf = str.slice(
    str.length % 2 === 0 ? middleChar : middleChar + 1,
  );

  return getVowelCount(firstHalf) === getVowelCount(secondHalf);
}

console.log(isBalanced("racecar"));
