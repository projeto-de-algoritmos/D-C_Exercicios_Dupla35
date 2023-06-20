function multiply(num1, num2) {
    // Função auxiliar para adicionar dois números representados como strings
    function add(lhs, rhs) {
      // Função auxiliar para alinhar as strings, preenchendo com zeros à esquerda, se necessário
      function alignStr(left, right) {
        const maxLen = Math.max(left.length, right.length);
        return [
          '0'.repeat(maxLen - left.length) + left,
          '0'.repeat(maxLen - right.length) + right
        ];
      }
  
      const [lhsAligned, rhsAligned] = alignStr(lhs, rhs);
      const res = [];
      let carry = 0;
      // Percorre as strings da direita para a esquerda
      for (let i = lhsAligned.length - 1; i >= 0; i--) {
        const l = lhsAligned.charCodeAt(i) - 48; // Converte o caractere para o valor numérico
        const r = rhsAligned.charCodeAt(i) - 48; // Converte o caractere para o valor numérico
        const val = l + r + carry; // Soma os dígitos e o carry anterior
        if (val >= 10) {
          res.push(String.fromCharCode(val - 10 + 48)); // Adiciona o dígito resultante (valor - 10) como caractere
          carry = 1; // Define o carry para a próxima iteração
        } else {
          res.push(String.fromCharCode(val + 48)); // Adiciona o dígito resultante como caractere
          carry = 0; // Define o carry para zero
        }
      }
      if (carry === 1) {
        res.push('1'); // Se houver um carry final, adiciona-o como dígito adicional
      }
      res.reverse(); // Inverte o vetor resultante para obter a representação correta do número
      return res.join(''); // Converte o vetor de dígitos em uma string
    }
     // Função auxiliar para multiplicar dois números grandes
  function plainMul(lhs, rhs) {
    // Remove os zeros à esquerda para evitar que eles influenciem o número de dígitos
    lhs = lhs.replace(/^0+/, '');
    rhs = rhs.replace(/^0+/, '');
    // Verifica se os números são pequenos o suficiente para multiplicação direta
    if (lhs.length + rhs.length < 38) {
      const product = BigInt(lhs) * BigInt(rhs); // Usa BigInt para garantir precisão com números grandes
      return product.toString(); // Converte o resultado de volta para uma string
    }

    // Função auxiliar para alinhar as strings, preenchendo com zeros à esquerda, se necessário
    function alignStr(left, right) {
      const maxLen = Math.max(left.length, right.length);
      return [
        '0'.repeat(maxLen - left.length) + left,
        '0'.repeat(maxLen - right.length) + right
      ];
    }

    const [lhsAligned, rhsAligned] = alignStr(lhs, rhs);
    const mid = Math.floor(lhsAligned.length / 2);
    const xh = lhsAligned.substring(0, mid); // Parte alta de lhs
    const xl = lhsAligned.substring(mid); // Parte baixa de lhs
    const yh = rhsAligned.substring(0, mid); // Parte alta de rhs
    const yl = rhsAligned.substring(mid); // Parte baixa de rhs
    const midLength = lhsAligned.length - mid;
    const xh_yh = plainMul(xh, yh) + '0'.repeat(midLength * 2); // Multiplica xh e yh recursivamente e adiciona zeros à direita
    const xh_yl = plainMul(xh, yl) + '0'.repeat(midLength); // Multiplica xh e yl recursivamente e adiciona zeros à direita
    const xl_yh = plainMul(xl, yh) + '0'.repeat(midLength); // Multiplica xl e yh recursivamente e adiciona zeros à direita
    const xl_yl = plainMul(xl, yl); // Multiplica xl e yl recursivamente
    return add(add(xh_yh, xh_yl), add(xl_yh, xl_yl)); // Combina os resultados intermediários
    }

    const res = plainMul(num1, num2).replace(/^0+/, ''); // Chama a função principal e remove os zeros à esquerda do resultado
    if (res === '') {
        return '0'; // Se o resultado for vazio, retorna '0'
    }
    
    return res; // Retorna o resultado
  }