// let titulo = document.querySelector('h1');
// titulo.innerHTML= 'Jogo do numero secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML= 'Escolha um numero de 1 a 10:';

let listaDeNumerosSorteados=[];
let limiteNumerosLista=10;
let numeroAleatorio= gerarNumeroAleatorio();
let tentativas=1;
mensagemInicial();

function exibirTextoNaTela(tag,texto){
   let campo =  document.querySelector(tag);
   campo.innerHTML= texto ;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function verificarChute() {
    let chute= document.querySelector('input').value;
    console.log(numeroAleatorio==chute);
    if(numeroAleatorio==chute){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('h1','Parabens voce acertou!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {

        if(numeroAleatorio>chute) {
        exibirTextoNaTela('h1','Pultz, voce errou :/');
        exibirTextoNaTela('p','O numero secreto é maior');
        limparTela();
              
       }
    
        else {
        exibirTextoNaTela('h1','Pultz, voce errou :/ ');
        exibirTextoNaTela('p','O numero secreto é menor');
        limparTela();
        
       }      
       tentativas++;
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido=parseInt(Math.random()*limiteNumerosLista+1);
    let quantidadeNumerosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeNumerosNaLista==limiteNumerosLista){
        listaDeNumerosSorteados=[];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparTela(){
    chute=document.querySelector('input');
    chute.value='';
}

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','Escolha um numero de 1 a 1000');
}

function reiniciarJogo(){
    numeroAleatorio= gerarNumeroAleatorio();
    limparTela();
    tentativas=1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute ('disabled',true);
}
