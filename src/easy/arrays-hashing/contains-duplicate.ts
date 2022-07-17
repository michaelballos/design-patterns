/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 *
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 *
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 *
 * Constraints:
 * 1 <= nums.length <= 105
 * -109 <= nums[i] <= 109
 */
const exampleOne = [1,2,3,1];
const exampleTwo = [1,2,3,4];
const exampleThree = [1,1,1,3,3,4,3,2,4,2];

/**
 * Takes an array and returns true if there are duplicate integers
 * @param nums
 */
const containsDuplicate = (nums: number[]): boolean => {
  const originalArrayLength = nums.length;
  const newSetArrayLength = new Set(nums).size;
  const hasDuplicates = originalArrayLength !== newSetArrayLength;
  console.log(hasDuplicates);
  return hasDuplicates;
}

/**
 * Takes in multiples examples and runs the solution
 * @param arrays Array of number arrays containing all the examples
 */
const validateMultipleArrays = (...arrays: number[][]): void => {
  arrays.map((example: number[], index) => {
    console.log('Example:', index + 1);
    containsDuplicate(example)
  })
}

/**
 * Log the example solutions
 */
export default function containsDuplicatesSolution() {
  console.log('Contains Duplicate:')
  validateMultipleArrays(
    exampleOne,
    exampleTwo,
    exampleThree,
  );
}
