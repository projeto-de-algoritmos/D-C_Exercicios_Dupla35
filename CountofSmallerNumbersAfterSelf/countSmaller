var countSmaller = function(nums) {
  // Cria um array para armazenar o resultado
  var result = new Array(nums.length).fill(0);
  
  // Define uma função auxiliar para realizar o merge sort com contagem de inversões
  function mergeSort(arr) {
    // Verifica se o array tem apenas um elemento ou está vazio
    if (arr.length <= 1) {
      return arr;
    }
    
    // Divide o array em duas metades
    var mid = Math.floor(arr.length / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    
    // Recursivamente aplica o merge sort em cada metade
    var sortedLeft = mergeSort(left);
    var sortedRight = mergeSort(right);
    
    // Combina as duas metades ordenadas e conta as inversões
    var merged = [];
    var inversionCount = 0;
    var i = 0;
    var j = 0;
    
    while (i < sortedLeft.length || j < sortedRight.length) {
        if (j === sortedRight.length || (i < sortedLeft.length && sortedLeft[i][0] <= sortedRight[j][0])) {
          // Adiciona o elemento da metade esquerda
          merged.push(sortedLeft[i]);
          result[sortedLeft[i][1]] += inversionCount;
          i++;
        } else {
          // Adiciona o elemento da metade direita
          merged.push(sortedRight[j]);
          inversionCount++;
          j++;
        }
      }

    return merged;
    }


   // Cria um array de pares (valor, índice) para realizar o merge sort com contagem de inversões
   var indexedNums = nums.map((value, index) => [value, index]);
  
   // Aplica o merge sort com contagem de inversões
   mergeSort(indexedNums);
   
   return result;
};
