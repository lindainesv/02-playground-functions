function encode(string) {
  let resultado = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      resultado += '1';
    } else if (string[index] === 'e') {
      resultado += '2';
    } else if (string[index] === 'i') {
      resultado += '3';
    } else if (string[index] === 'o') {
      resultado += '4';
    } else if (string[index] === 'u') {
      resultado += '5';
    } else {
      resultado += string[index];
    }
  }
  return resultado;
}
