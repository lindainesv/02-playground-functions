// Desafio 1
function compareTrue(condicao1, condicao2) {
  if (condicao1 === true && condicao2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(lista) {
  let vigula = ', ';
  let juntou = lista[lista.length - 1].concat(vigula, lista[0]);
  return juntou;
}

// Desafio 5
function footballPoints(numeroDeVitorias, numeroDeEmpates) {
  let numeroDeVitoriasPeso3 = (numeroDeVitorias * 3);
  let qtdDePontos = numeroDeVitoriasPeso3 + numeroDeEmpates;
  return qtdDePontos;
}

// Desafio 6*************************************************
function highestCount(numeros) {
  let contarRepetido = 0;
  let numeroMaisRepetido = 0;
  let numeroAtual = 0;

  for (let i in numeros) {
    let verificarNumero = numeros[i];
    for (let i in numeros) {
      if (verificarNumero === numeros[i]) {
        numeroMaisRepetido += 1;
      }
    }
    if (numeroMaisRepetido > contarRepetido) {
      contarRepetido = numeroMaisRepetido;
      numeroAtual = i;
    }
    numeroMaisRepetido = 0;

    let qtsVezesRepete = 0;
    for (
      let indexContador = 0;
      indexContador < numeros.length;
      indexContador += 1
    ) {
      if (verificarNumero === numeros[indexContador]) {
        qtsVezesRepete += 1;
      }
    }
    
  }
	return qtsVezesRepete;
}

// Desafio 7
// pesquisa: Math.abs recebe um número e retorna o valor absoluto dele
function catAndMouse(mouse, cat1, cat2) {
  const distancia1 = (Math.abs(mouse - cat1)); 
  const distancia2 = (Math.abs(mouse - cat2));

  if (distancia1 < distancia2) {
    return 'cat1';
  } if (distancia1 > distancia2) {
    return 'cat2';
  } if (distancia1 === distancia2);
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index of array) {  
  if (index % 3 === 0 && index % 5 === 0) {
  resultado.push ('fizzBuzz');
    } else if (index%3 === 0) {
      resultado.push ('fizz');
    } else if (index%5 === 0) {
      resultado.push ('buzz');
    } else if (index%3 !== 0 && index%5 !== 0) {
      resultado.push ('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
