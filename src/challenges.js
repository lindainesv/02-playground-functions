/* eslint-disable complexity */
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
// primeira parte
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(numeros) {
  let numeroMaior = numeros[0];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > numeroMaior) {
      numeroMaior = numeros[i];
    }
  }
  // segunda parte
  let contador = 0;
  for (let i2 = 0; i2 < numeros.length; i2 += 1) {
    if (numeroMaior === numeros[i2]) {
      contador += 1;
    }
  }
  return contador;
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
// refatorar
// eslint-disable-next-line sonarjs/cognitive-complexity
function fizzBuzz(array) {
  let resultado = [];
  for (let index of array) {
    if (index % 3 === 0 && index % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (index % 3 === 0) {
      resultado.push('fizz');
    } else if (index % 5 === 0) {
      resultado.push('buzz');
    } else if (index % 3 !== 0 && index % 5 !== 0) {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
// trocar todas as **vogais minúsculas por números**,
// entao se a frase conter vogais deve-se troca-las por numero

function encode(frase) {
let fraseCodificada = '';
	for (let i = 0; i < frase.length; i +=1 ) {
		if(frase[i] === 'a') {
			fraseCodificada += '1';	
		} else if (frase[i] === 'e') {
			fraseCodificada += '2';
		} else if (frase[i] === 'i') {
			fraseCodificada += '3';
		} else if (frase[i] === 'o') {
			fraseCodificada += '4';
		} else if (frase[i] === 'u') {
			fraseCodificada += '5';
		} else {
			fraseCodificada += frase[i];
		}
	}
	return fraseCodificada;
}

function decode(frase) {
  let fraseDecodificada = "";
	for (let i = 0; i < frase.length; i +=1 ) {
			if(frase[i] === '1') {
				fraseDecodificada += 'a';	
			} else if (frase[i] === '2') {
				fraseDecodificada += 'e';
			} else if (frase[i] === '3') {
				fraseDecodificada += 'i';
			} else if (frase[i] === '4') {
				fraseDecodificada += 'o';
			} else if (frase[i] === '5') {
				fraseDecodificada += 'u';
			} else {
				fraseDecodificada += frase[i];
			}
	}
	return fraseDecodificada;
}

/* function encode(valores) {
let '';
let vogaisMinusculas = ['a', 'e', 'i', 'o', 'u']
let numeros =[1, 2, 3, 4, 5]

for (let i = 0; i < valores.length; i +=1) {
	const element = array[i];
	
}

	for (let codificar of valores) {
		if (codificar.replace(vogaisMinusculas, numeros)) {
			'';
		}
	}
} */


// Desafio 10
// Um array com nomes de tecnologias ;
// - Um nome referente ao nome de uma pessoa.
  
// A função deverá retornar:
// - 'Vazio!' se não receber parâmetro algum ;
// - Um objeto para cada tecnologia do array, com a seguinte estrutura:

function techList(tecnologias, nome ) {

	let nomeTecnologias = [];

	if (tecnologias.length	=== 0) {
	return 'Vazio!';
	}; tecnologias = tecnologias.sort();

	for (let i = 0; i < tecnologias.length; i += 1) {
		let lista = {tecnologias: tecnologias[i], nome: nome};
		tecnologias.push(lista);
	}
	return nomeTecnologias;
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
