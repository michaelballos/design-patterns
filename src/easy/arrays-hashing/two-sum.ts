/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * 2 <= nums.length <= 104
 * -109 <= nums[i] <= 109
 * -109 <= target <= 109
 * Only one valid answer exists.
 */

export interface ITwoSum {
  nums: Array<number>;
  target: number;
}

const exampleOne = {
  nums: [2,7,11,15],
  target: 9
};

const exampleTwo = {
  nums: [3,2,4],
  target: 6
};

const exampleThree = {
  nums: [3,3],
  target: 6
};

/**
 * Takes an arrays value and returns an array with indexes
 * of its elements that sum up to the target value
 * @param nums
 * @param target
 * @return {Array}
 */
function twoSum({
  nums,
  target
}: ITwoSum) {
  const indexNums = nums.map((num: number, index: number) => {
    return {
      [num]: index
    }
  });
  const hashTable = Object.assign({}, ...indexNums);
    for (let i = 0; nums.length > i; i++) {
      const complement = target - nums[i];
      if (i !== hashTable[complement] && nums[i] + complement === target && complement in hashTable) {
        console.log([i, hashTable[complement]]);
        return [i, hashTable[complement]];
      }
  }
}

const validateExamples = (...twoSumExamples: Array<ITwoSum>): void => {
  twoSumExamples.map((example: ITwoSum, index: number) => {
    console.log('Example:', index + 1);
    return twoSum(example);
  })
}

export default function twoSumLog(): void {
  console.log('Two Sum:')
  return validateExamples(
    exampleOne,
    exampleTwo,
    exampleThree
    );
}
