// Desafio 1
function compareTrue(condicao1, condicao2) {
  if (condicao1 === true && condicao2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
// const palavra = frase.split();

return frase.split(' ');
}

// Desafio 4

 function concatName(lista) {
 let vigula = ', ';
	let juntou = lista[lista.length -1].concat(vigula, lista[0]);
	return juntou;
}

// Desafio 5	numeroDeVitorias= *3 numeroDeEmpates= *1
function footballPoints(numeroDeVitorias, numeroDeEmpates) { 
	let numeroDeVitoriasPeso3= (numeroDeVitorias *3);
	let qtdDePontos = numeroDeVitoriasPeso3 + numeroDeEmpates;
	return qtdDePontos ;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
