/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const complements = {};
  for (let i = 0; i < nums.length; i++) {
    if (complements.hasOwnProperty(nums[i])) {
      return [complements[nums[i]], i];
    }

    const comp = target - nums[i];
    complements[comp] = i;
  }

  return [];
};

const input = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(input, target));
