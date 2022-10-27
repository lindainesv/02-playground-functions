// Requisito 1

// tem som e tenho dinheiro > vou sair (true)
// tem sol e nao tenho dinheiro > nao vou sair (false)
// nao tem sol e nao tenho dinheiro > nao vou sair (false)


const condicao1 = 'sol';
const condicao2 =  'dinheiro';

function compareTrue() {
	if (condicao1 === "sol" && condicao2 === "dinheiro") {
		console.log("Eba! Vou sair");
	} else{
		console.log("Poxa não vou sair #sad");
	}
}



