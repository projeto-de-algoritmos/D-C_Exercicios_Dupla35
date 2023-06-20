function findKthSmallest(nums, k, trim) {
  const trimmedNums = nums.map(num => num.slice(-trim));
  const sortedIndices = trimmedNums.map((_, index) => index).sort((a, b) => {
    if (trimmedNums[a] === trimmedNums[b]) {
      return a - b;
    } else {
      return trimmedNums[a].localeCompare(trimmedNums[b]);
    }
  });
  return sortedIndices[k - 1];
}

function smallestTrimmedNumbers(nums, queries) {
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const [k, trim] = queries[i];
    const originalNums = nums.slice();

    for (let j = 0; j < nums.length; j++) {
      nums[j] = nums[j].slice(-trim);
    }

    const index = findKthSmallest(nums, k, trim);
    result.push(index);

    nums = originalNums;
  }

  return result;
}