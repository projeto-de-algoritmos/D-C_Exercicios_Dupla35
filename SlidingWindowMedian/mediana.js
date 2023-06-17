/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

function findMedian(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const n = sortedNums.length;
  if (n % 2 === 0) {
    return (sortedNums[n / 2] + sortedNums[n / 2 - 1]) / 2;
  } else {
    return sortedNums[Math.floor(n / 2)];
  }
}

function medianSlidingWindow(nums, k) {
  const result = [];
  const window = nums.slice(0, k);
  const sortedWindow = [...window].sort((a, b) => a - b);
  result.push(findMedian(sortedWindow));

  for (let i = k; i < nums.length; i++) {
    const removeIdx = window.indexOf(nums[i - k]);
    window.splice(removeIdx, 1);

    const insertIdx = binarySearch(sortedWindow, nums[i]);
    window.splice(insertIdx, 0, nums[i]);
    sortedWindow.splice(insertIdx, 0, nums[i]);

    if (window.length > k) {
      const removeIdx = window.indexOf(nums[i - k + 1]);
      window.splice(removeIdx, 1);
      sortedWindow.splice(removeIdx, 1);
    }

    result.push(findMedian(sortedWindow));
  }

  return result;
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
