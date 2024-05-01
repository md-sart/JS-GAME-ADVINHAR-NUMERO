
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do numero secreto');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');

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

tentativas++
limparCampo ()

}
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}