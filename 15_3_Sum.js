// 15. 3Sum
// Medium
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

// Input: nums = []
// Output: []

// Example 3:

// Input: nums = [0]
// Output: []

// Constraints:

//     0 <= nums.length <= 3000
//     -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//solution
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  if (nums.length < 0) {
    return [];
  }
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] != nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === 0) {
          triplets.push([nums[i], nums[left], nums[right]]);
          while (nums[left] == nums[left + 1]) left++;
          while (nums[right] == nums[right - 1]) right--;
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else if (currentSum > 0) {
          right--;
        }
      }
    }
  }
  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
