// const botoes = document.querySelectorAll(".botao");
 
// botoes.forEach(botao => {
//     botao.addEventListener("click", () => {
    
//     const botaoSelecionado = document.querySelector(".botao.selecionado");
//     botao.classList.remove("selecionado");
        
//     botao.classList.add("selecionado");

//     });
// });


function selecionaBotao(botaoSelecionado) {
    deselecionarBotao();
    botaoSelecionado.classList.add('botao-selecionado');

}

function deselecionarBotao() {
    const botaoSelecionado = document.getElementsByClassName('botao-selecionado');
    botaoSelecionado[0].classList.remove('botao-selecionado');
}
