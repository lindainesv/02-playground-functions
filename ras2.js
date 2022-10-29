function highestCount(array) {
  let maior = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  let contador = 0;
  for (let secondIndex = 0; secondIndex < array.length; secondIndex += 1) {
    if (maior === array[secondIndex]) {
      contador += 1;
    }
  }
  return contador;
}