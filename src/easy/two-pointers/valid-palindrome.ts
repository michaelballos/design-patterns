/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 *
 * Constraints:
 * 1 <= s.length <= 2 * 105
 * s consists only of printable ASCII characters.
 */

const examples = [
  'A man, a plan, a canal: Panama',
  'race a car',
  ' '
];

/**
 * Takes a string, removes non alpha numerics, and returns true if it matches the reversed version
 * @param s
 * @return {boolean}
 */
function isPalindrome(s: string): boolean {
  const removeNonAlphanumerics = s.replace(/[^a-z\d]/gi, '').toLowerCase();
  const reversedString = removeNonAlphanumerics.split('').reverse().join('');
  console.log(reversedString === removeNonAlphanumerics);
  return reversedString === removeNonAlphanumerics;
}

const validateStrings = () => {
  return examples.map((phrase: string, index) => {
    console.log('Example:', index + 1);
    isPalindrome(phrase);
  })
}

export default function validPalindromeLog() {
  console.log(
    '\x1b[36m%s\x1b[0m',
    'Is Palindrome:'
  );
  return validateStrings();
}
