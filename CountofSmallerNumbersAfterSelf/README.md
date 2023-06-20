# Nome do Exercício 
315. Count of Smaller Numbers After Self

[Link para o exercício](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)

# Explicação

Dado um array de inteiros nums, retorne um array de inteiros counts, onde counts[i] é o número de elementos menores à direita de nums[i].

# O que foi utilizado para resolver

A solução usada é uma implementação semeplhante ao "Merge-and-Count" mostrado em aula, durante a fase de combinação (merge) das duas metades ordenadas, a função mantém um contador de inversões. Quando um elemento da metade direita é adicionado ao array combinado, significa que esse elemento é menor que todos os elementos restantes da metade esquerda, resultando em uma inversão. Nesse caso, o contador de inversões é incrementado e o valor correspondente é adicionado ao elemento do array result na posição adequada.
