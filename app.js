
let numeroSecreto = gerarNumeroAleatorio()
let titulo  = document.querySelector(h1);
titulo.innerHTML = 'jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

function exibitTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibitTextoNaTela('h1', 'Jogo do numero secreto')
exibitTextoNaTela('p', 'Escolha um numero entre 1 e 10')

function verificaChute(){
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto) { 
        exibitTextoNaTela('h1', 'Acertou!');
        exibitTextoNaTela('p', 'Voce descobriu o numrto secreto');
} else{
    exibitTextoNaTela('p', 'o numero secreto é maior');
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random()*10+1);
}
}