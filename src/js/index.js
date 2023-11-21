// const botoes = document.querySelectorAll(".botao");
 
// botoes.forEach(botao => {
//     botao.addEventListener("click", () => {
    
//     const botaoSelecionado = document.querySelector(".botao.selecionado");
//     botao.classList.remove("selecionado");
        
//     botao.classList.add("selecionado");

//     });
// });

var listaDeConteudo = [
    {
        nome: 'Tony Chopper',
        descricao: `Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena
        que,
        após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos.
        Ele é o sexto membro e um dos poucos membros da tripulação que nasceu na Grand Line, numa ilha
        chamada Drum.`,
        img: './src/imagens/imagens/personagem-tony-chopper.png',
    },
    {
        nome: 'Ronoroa Zoro',
        descricao: `Foi o primeiro membro a juntar-se à tripulação. Sua fama como mestre espadachim e
        sua grande força,
        juntamente com as ações de seu capitão, às vezes levaram os outros a acreditar que ele era o
        verdadeiro capitão da
        tripulação antes deste obter sua primeira recompensa, enquanto algumas pessoas acreditam que ele
        seja o imediato`,
        img: './src/imagens/imagens/personagem-roronoa-zoro.png',
    },
    {
        nome: 'Monkey D. Luffy',
        descricao: `Também conhecido como "Chapéu de Palha", é o fundador e capitão dos cada vez mais
        infames e
        poderosos Piratas do Chapéu de Palha, bem como o mais poderoso de seus melhores lutadores. Ele
        deseja encontrar o
        tesouro lendário deixado para trás pelo falecido Gol D. Roger e assim se tornar o Rei dos Piratas.`,
        img: './src/imagens/imagens/personagem-monkey-d-luffy.png',
    },
    {
        nome: 'Nami',
        descricao: `A "Gata Ladra" Nami é a navegadora dos Piratas do Chapéu de Palha.
        Ela foi o terceiro membro da tripulação, ela é a irmã adotiva de Nojiko, desde que as
        duas ficaram órfãs e foram levadas por Bell-mère.`,
        img: './src/imagens/imagens/personagem-nami.png',
    },
    {
        nome: 'Sanji',
        descricao: `"Perna Preta" Sanji, nascido como Vinsmoke Sanji, e também é o cozinheiro dos
        Piratas do Chapéu de Palha,
        assim como um antigo chefe de cozinha do Baratie. Ele também é o terceiro filho e a quarta criança
        da Família Vinsmoke,
        tornando-o um príncipe do Reino Germa, até que ele oficialmente os renunciou duas vezes.`,
        img: './src/imagens/imagens/personagem-sanji.png',
    },
];


function selecionaBotao(botaoSelecionado, posicao) {
    deselecionarBotao();
    botaoSelecionado.classList.add('botao-selecionado');
    mudarConteudo(posicao);
}

function deselecionarBotao() {
    const botaoSelecionado = document.getElementsByClassName('botao-selecionado');
    botaoSelecionado[0].classList.remove('botao-selecionado');
}

function mudarConteudo(posicao) {
    const tagNome = document.getElementsByClassName('nome-personagem');
    const tagDescricao = document.getElementsByClassName('descricao')
    const tagImagem = document.getElementsByClassName('imagem')

    tagNome[0].innerHTML = listaDeConteudo[posicao].nome;
    tagDescricao[0].innerHTML = listaDeConteudo[posicao].descricao;
    tagImagem[0].src = listaDeConteudo[posicao].img;
}
