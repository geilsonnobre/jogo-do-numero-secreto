let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirMensagemInicial(){

    exibirTextoNaTela("h1","Jogo do número secreto!");
    exibirTextoNaTela("p","Escolha um número de 1 à 10:");

}

function verificarChute(){

    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";

    if (chute == numeroSecreto){

        let mensagem = "Você descobriu o número secreto com "+tentativa+" "+palavraTentativa;
        exibirTextoNaTela("h1","Acertou!");
        exibirTextoNaTela("p",mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");

    }else if(chute > numeroSecreto){

        exibirTextoNaTela("h1","Você Errou...");
        exibirTextoNaTela("p","O número secreto é menor.");
        limparCampo();

    }else{

        exibirTextoNaTela("h1","Você Errou...");
        exibirTextoNaTela("p","O número secreto é maior.");
        limparCampo();
    
    }

    tentativa++;
    
}

function exibirTextoNaTela(tag,texto){

    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});

}

function gerarNumeroAleatorio(){

    let numeroLimite = 10;
    let numeroSorteado = parseInt((Math.random()*numeroLimite)+1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length;

    if(quantidadeDeElementos == numeroLimite){

        listaDeNumerosSorteados = [];

    }

    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        
        return gerarNumeroAleatorio();

    }else{

        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;

    }

}

function limparCampo(){

    chute = document.querySelector("input");
    chute.value = "";

}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById("reiniciar").setAttribute("disabled",true);

}

exibirMensagemInicial();
