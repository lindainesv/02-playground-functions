function highestCount(numeros) {
  let numeroMaior = numeros[0];
  // let numeroMaisRepetido = 0;
  // let numeroAtual = 0;

  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > numeroMaior) {
      numeroMaior = numeros[i];
    }
  }
  // if (numeroMaisRepetido > contarRepetido) {
  //   contarRepetido = numeroMaisRepetido;
  //   numeroAtual = i;
  // }
  // numeroMaisRepetido = 0;

  // let qtsVezesRepete = 0;

  //segunda parte
  let contador = 0;
  for (let i2 = 0; i2 < numeros.length; i2 += 1) {
    if (numeroMaior === numeros[i2]) {
      contador += 1;
    }
  }
  return contador;
}
  console.log();
