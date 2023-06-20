# Nome do Exercício 
480. Sliding Window Median

[Link para o exercício](https://leetcode.com/problems/sliding-window-median/)

# Explicação


No exercício, você recebe um array inteiro nums e um inteiro k. Há uma janela deslizante de tamanho k que se move da extrema esquerda do array para a extrema direita. Você só pode ver os k números na janela. Cada vez que a janela deslizante se move para a direita uma posição.
Deve-se calcular a matriz mediana para cada janela na matriz original. Deve-se retornar um array para a i-ésima consulta.

# O que foi utilizado para resolver

Para resolver o problema, foi utilizado o algoritmo de mediana das medianas de dividir e conquistar, onde foi definida uma classe para heap e para a mediana. A função medianSlidingWindow cria uma instância da classe da mediana e uma lista vazia chamada resultado para armazenar as medianas e retorna a lista resultado com as medianas calculadas.

