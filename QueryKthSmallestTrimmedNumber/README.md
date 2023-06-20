# Nome do Exercício 
2343. Query Kth Smallest Trimmed Number

[Link para o exercício](https://leetcode.com/problems/query-kth-smallest-trimmed-number/)

# Explicação

O exercício consiste em receber um array de strings com o mesmo comprimento contendo somente dígitos e outro de consultas, onde é necessário:
   - Cortar cada número em `nums` para seus `trimi` dígitos mais à direita.
   - Determinar o índice do k-ésimo menor número cortado em `nums`. Se dois números cortados forem iguais, o número com o índice mais baixo é considerado menor.
   - Restaurar cada número em `nums` para seu comprimento original.

Deve-se retornar um array para a i-ésima consulta.

# O que foi utilizado para resolver

Para resolver o problema, foi utilizado o algoritmo de dividir e conquistar, onde a função "findKthSmallest recebe o array de números, o índice do k-ésimo menor número e a quantidade de dígitos a serem mantidos no fim e retorna o índice. Na função principal, é utilizada a anterior para conseguir o índice correto e adicionar no vetor de resultados, que vai armazenando de cada consulta e é retornado ao fim.
