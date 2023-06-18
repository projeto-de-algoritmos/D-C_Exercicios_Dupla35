function encontraMenor(nums, k, trim) {
  const trimmedNums = nums.map(num => num.slice(-trim));
  const indices = trimmedNums.map((_, index) => index).sort((a, b) => {
    if (trimmedNums[a] === trimmedNums[b]) {
      return a - b;
    } else {
      return trimmedNums[a].localeCompare(trimmedNums[b]);
    }
  });
  return indices[k - 1];
}

function smallestTrimmedNumbers(nums, queries) {
  const resultado = [];

  for (let i = 0; i < queries.length; i++) {
    const [k, trim] = queries[i];
    const numerosOriginais = nums.slice();

    for (let j = 0; j < nums.length; j++) {
      nums[j] = nums[j].slice(-trim);
    }

    const index = encontraMenor(nums, k, trim);
    resultado.push(index);

    nums = numerosOriginais;
  }

  return resultado;
}