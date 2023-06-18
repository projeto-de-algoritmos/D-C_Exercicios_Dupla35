class Heap {
  constructor(compara) {
      this.values = [];
      this.fn = compara || Heap.minCompara;
  }

  tamanho() {
      return this.values.length;
  }
  
  isEmpty() {
      return this.tamanho() === 0;
  }

  pop() {
      return this.remove(this.values[0]);
  }

  peek() {
      return this.values[0];
  }

  add(value) {
      this.values.push(value);
      this.subirHeap(this.tamanho() - 1);
  }

  remove(value) {
      const index = this.values.indexOf(value);
      if (index === -1) {
          return undefined;
      }
      if (index === this.tamanho() - 1) {
          return this.values.pop();
      }
      this.troca(index, this.tamanho() - 1);
      const val = this.values.pop();
      this.descerHeap(this.subirHeap(index));
      return val;
  }

  troca(id1, id2) {
      const temp = this.values[id1];
      this.values[id1] = this.values[id2];
      this.values[id2] = temp;
  }

  compara(id1, id2) {
      return this.fn(this.values[id1], this.values[id2]);
  }

  subirHeap(index) {
      if (index === 0) {
          return index;
      }
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.compara(parentIndex, index)) {
          this.troca(parentIndex, index);
          this.subirHeap(parentIndex);
      }
      return index;
  }

  descerHeap(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let largestIndex = index;
      if (leftChildIndex < this.tamanho() && this.compara(largestIndex, leftChildIndex)) {
          largestIndex = leftChildIndex;
      }
      if (rightChildIndex < this.tamanho() && this.compara(largestIndex, rightChildIndex)) {
          largestIndex = rightChildIndex;
      }
      if (largestIndex !== index) {
          this.troca(index, largestIndex);
          this.descerHeap(largestIndex);
      }
      return index;
  }
}

Heap.minCompara = (a, b) => a > b;
Heap.maxcompara = (a, b) => a < b;

class EncontraMediana {
  constructor() {
      this.minHeap = new Heap(Heap.minCompara);
      this.maxHeap = new Heap(Heap.maxcompara);
  }

  add(value) {
      if (this.maxHeap.tamanho() === 0 || this.maxHeap.peek() > value) {
          this.maxHeap.add(value);
      } else {
          this.minHeap.add(value);
      }
      this.balanco();
  }

  remove(value) {
      if (value <= this.maxHeap.peek()) {
          this.maxHeap.remove(value);
      } else {
          this.minHeap.remove(value);
      }
      this.balanco();
  }

  mediana() {
      if(this.maxHeap.tamanho() > this.minHeap.tamanho()) {
          return this.maxHeap.peek();
      }
      if(this.minHeap.tamanho() > this.maxHeap.tamanho()) {
          return this.minHeap.peek();
      }
      return this.maxHeap.peek() / 2 + this.minHeap.peek() / 2;
  }

  balanco() {
      if (this.maxHeap.tamanho() > this.minHeap.tamanho() + 1) {
          this.minHeap.add(this.maxHeap.pop());
      } else if (this.minHeap.tamanho() > this.maxHeap.tamanho()) {
          this.maxHeap.add(this.minHeap.pop());
      }
  }
}

var medianSlidingWindow = function(nums, k) {
  const encontraMediana = new EncontraMediana();
  const resultado = [];
  let inicio = 0;
  for (let fim = 0; fim < nums.length; fim++) {
      encontraMediana.add(nums[fim]);
      const tamanho = fim - inicio + 1;
      if (tamanho === k) {
          resultado.push(encontraMediana.mediana());
          encontraMediana.remove(nums[inicio]);
          inicio++;
      }
  }
  return resultado;
};