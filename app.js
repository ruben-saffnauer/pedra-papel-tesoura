const mostraEscolhaComputador = document.getElementById('escolha-computador');
const mostraEscolhaJogador = document.getElementById('escolha-jogador');
const mostraResultado = document.getElementById('resultado');
const possiveisEscolhas = document.querySelectorAll('button');
let escolhaJogador;
let escolhaComputador;
let resultado;

possiveisEscolhas.forEach(escolha => escolha.addEventListener('click', (evento) => {
    escolhaJogador = evento.target.id;
    mostraEscolhaJogador.innerHTML = escolhaJogador;
    geraEscolhaAleatoria();
    gerarResultado();
}));

function geraEscolhaAleatoria() {
    const numAleatorio = Math.floor(Math.random() * 3) + 1;
    if(numAleatorio === 1) escolhaComputador = "Pedra";
    if(numAleatorio === 2) escolhaComputador = "Papel";
    if(numAleatorio === 3) escolhaComputador = "Tesoura";
    mostraEscolhaComputador.innerHTML = escolhaComputador;
}

function gerarResultado() {
    if(escolhaComputador === escolhaJogador) resultado = "Empate!";
    if(escolhaComputador === "Pedra" && escolhaJogador === "Tesoura") resultado = "Perdeu!";
    if(escolhaComputador === "Papel" && escolhaJogador === "Pedra") resultado = "Perdeu!";
    if(escolhaComputador === "Tesoura" && escolhaJogador === "Papel") resultado = "Perdeu!";
    if(escolhaComputador === "Pedra" && escolhaJogador === "Papel") resultado = "Ganhou!";
    if(escolhaComputador === "Papel" && escolhaJogador === "Tesoura") resultado = "Ganhou!";
    if(escolhaComputador === "Tesoura" && escolhaJogador === "Pedra") resultado = "Ganhou!";
    mostraResultado.innerHTML = resultado;
}