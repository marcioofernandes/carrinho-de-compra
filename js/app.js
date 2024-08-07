
let totalGeral;
limpar ();

function adicionar (){
// recuperando os valores
let produto = document.getElementById ('produto').value;
let nomeProduto = produto.split("-")[0];
let valorUnitario = produto.split ("R$")[1];
let quantidade = document.getElementById ('quantidade').value;

// calculando o preço 
let preco = quantidade * valorUnitario;
// adicionar o produto no carrinho
let carrinho = document.getElementById ("lista-produtos");
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${valorUnitario}</span>
        </section>`;
// atualizar o valor total 
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById ("valor-total");
        campoTotal.textContent = `R$ ${totalGeral}`;
        document.getElementById ('quantidade').value = 0


};

function limpar () {
    totalGeral = 0
    document.getElementById ("lista-produtos").innerHTML = "";
    document.getElementById ("valor-total").textContent = "R$ 0";

}