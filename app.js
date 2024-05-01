
let ListaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial (){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}


function verificaChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) { 
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'o numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
}

tentativas++
limparCampo ()

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        ListaDeNumerosSorteados = [];
    }

    if(ListaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        ListaDeNumerosSorteados.push(numeroEscolhido);
        console.log(ListaDeNumerosSorteados);
        return numeroEscolhido;
    }
    }

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}