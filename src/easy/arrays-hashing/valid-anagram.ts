/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 */
export interface IAnagram {
  s: string;
  t: string;
}

const exampleOne = {
  s: 'anagram',
  t: 'nagaram'
};

const exampleTwo = {
  s: 'rat',
  t: 'car'
};

const isAnagram = ({
  s,
  t
}: IAnagram): boolean => {
  const splitS = s.split('').sort().join('');
  const splitT = t.split('').sort().join('');
  console.log(splitS === splitT);
  return splitS === splitT;
};

/**
 * Takes in multiples examples and runs the solution
 * @param examples Object containing two strings to compare
 */
const validateMultipleObjects = (...examples: Array<IAnagram>) => {
  examples.map((example: IAnagram, index: number) => {
    console.log('Example:', index + 1);
    return isAnagram(example);
  })
}

export default function validAnagramLog() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    'Valid Anagrams:'
  );
  validateMultipleObjects(
    exampleOne,
    exampleTwo
  );
}
