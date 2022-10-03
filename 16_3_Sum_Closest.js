// 16. 3Sum Closest
// Medium

// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

 

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0

 

// Constraints:

//     3 <= nums.length <= 1000
//     -1000 <= nums[i] <= 1000
//     -104 <= target <= 104



const threeSumClosest = (nums, target) => {
    let len = nums.length, sum=0;
    if(len === 0) return 0;
    if(len <= 3) {
      for(let i=0; i<len; i++){
          sum += nums[i];
      }
      return sum;
    }
    nums.sort(function(a,b){
        return a-b;
    });
    
    let closest = nums[0]+nums[1]+nums[2];
    for(let i=0; i<len; i++){
      for(let j=i+1, k=len-1; j<len-1, j<k; ){
        var sum = nums[i] + nums[j] + nums[k];
        if(sum === target){
            return sum;
        } else if(sum<target){
          if((closest<sum && sum<target) ||
             Math.abs(target-sum)<Math.abs(target-closest)){
              closest = sum;
          }
          j++;
        } else if(sum>target){
          if(closest>sum && sum>target ||
             Math.abs(target-sum) < Math.abs(target-closest)) {
              closest = sum;
          }
          k--; //to reduce sum decrease tail
        }
          
      }
    }
    return closest;
  };

  console.log(threeSumClosest([-1,2,1,-4],1))