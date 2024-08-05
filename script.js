const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está se preparando para pegar a primeira onda da bateria. Qual é sua estratégia?",
        alternativas: [
            {
                texto: "Pegar a onda maior e mais desafiadora.",
                afirmacao: "Você pega a onda maior e realiza manobras impressionantes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Pegar uma onda menor e mais fácil.",
                afirmacao: "Você pega a onda menor e realiza manobras básicas. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está surfando uma onda. Qual manobra você tenta?",
        alternativas: [
            {
                texto: "Um aéreo (manobra aérea).",
                afirmacao: "Você executa um aéreo perfeito, impressionando os juízes. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Uma rasgada básica.",
                afirmacao: "A rasgada foi bem executada, mas sem grandes desafios. Pontuação moderada.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está se aproximando da seção crítica da onda. O que você faz?",
        alternativas: [
            {
                texto: "Tenta um tubo (entrar na parte oca da onda).",
                afirmacao: "Você entra no tubo e sai com sucesso. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Realiza uma manobra segura.",
                afirmacao: "Você realiza uma manobra segura, mas sem grandes riscos. Pontuação moderada.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "Você vê uma série de ondas se aproximando. Qual é sua escolha?",
        alternativas: [
            {
                texto: "Pega a primeira onda da série.",
                afirmacao: "A primeira onda da série foi a melhor e você conseguiu realizar manobras incríveis. Alta pontuação para você!",
                pontos: 1
            },
            {
                texto: "Espera a última onda da série.",
                afirmacao: "A última onda da série foi fraca e não permitiu manobras significativas. Pontuação baixa.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você está no final da bateria e precisa de uma boa pontuação. O que você faz?",
        alternativas: [
            
                texto: "Arrisca uma manobra difícil.",
                afirmacao: "A manobra difícil foi bem-sucedida e você conseguiu a pontuação necessária. Alta pontuação para você!",
                pontos: 1
            ,
            {
                texto: "Joga seguro com uma manobra básica.",
                afirmacao: "A manobra básica foi bem executada, mas não suficiente para a pontuação necessária. Pontuação moderada.",
                pontos: 0
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual+;
    mostraPergunta();
}

mostraPergunta();