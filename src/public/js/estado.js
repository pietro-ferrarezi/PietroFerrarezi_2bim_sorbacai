// Variável de estado para controle
let estado = {
  produtos: [],
  complementos: [],

  produtoSelecionado: null,
  complementosSelecionados: [],
  precoTotal: 0,

  carrinho: [],
};

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(estado.carrinho));
}