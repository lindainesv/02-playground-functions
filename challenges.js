// Requisito 1

// tem som e tenho dinheiro > vou sair (true)
// tem sol e nao tenho dinheiro > nao vou sair (false)
// nao tem sol e nao tenho dinheiro > nao vou sair (false)

// const condicao1 = 'sol';
// const condicao2 = 'dinheiro';  >>> não são usados

function compareTrue(condicao1, condicao2) {
  if (condicao1 === true && condicao2 === true) {
    return true;
  } else {
    return false;
  }
}

// console.log(compareTrue(true, false));

// Requisito 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Requisito 3
// 3 - Crie uma função que divida uma frase de acordo com a quantidade de palavras
//a função recebe como parametro uma string
//retornar um array com as palavras separadas por virgula

function splitSentence(string) {
  return splitSentence.split('');
}
