/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function findMedian(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  if (n % 2 === 0) {
    return (nums[n / 2] + nums[n / 2 - 1]) / 2;
  } else {
    return nums[Math.floor(n / 2)];
  }
}

function medianSlidingWindow(nums, k) {
  const result = [];
  if (nums.length < k) {
    return result;
  }

  for (let i = 0; i <= nums.length - k; i++) {
    const window = nums.slice(i, i + k);
    const median = findMedian(window);
    result.push(median);
  }

  return result;
}
