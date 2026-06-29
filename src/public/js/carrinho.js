window.onload = () => {
  estado.carrinho = JSON.parse(localStorage.getItem("carrinho"));
  console.log(estado.carrinho);
  renderizarCarrinho();
};

function renderizarCarrinho() {
  if (estado.carrinho === null || estado.carrinho.length === 0) {
    document.querySelector(".itens").innerHTML =
      '<p class="default">Carrinho vazio</p>';
  } else {
    const total = calcularTotalCarrinho();
    document.querySelector("#total").innerText = `R$${total.replace(".", ",")}`;
    document.querySelector(".itens").innerHTML = "";
    estado.carrinho.forEach((item) => {
      document.querySelector(".itens").append(criarCardItem(item));
    });
  }
}

function criarCardItem(item) {
  const item_card = document.createElement("div");
  item_card.classList.add("item");

  const item_infos = document.createElement("div");
  item_infos.classList.add("item-infos");

  const h4_nome = document.createElement("h4");
  h4_nome.innerText = item.produto.nome;

  const ul = document.createElement("ul");

  item.complementos.forEach((complemento) => {
    const li = document.createElement("li");
    li.innerText = complemento.nome;
    ul.append(li);
  });

  item_infos.append(h4_nome, ul);

  const button_excluir = document.createElement("button");
  button_excluir.classList.add("btn-excluir");
  button_excluir.innerHTML = '<i class="fa-solid fa-trash"></i>';

  item_card.append(item_infos, button_excluir);

  return item_card;
}

function calcularTotalCarrinho() {
  let total = 0;
  estado.carrinho.forEach((item) => {
    total += parseFloat(item.precoTotalItem);
  });

  return total.toFixed(2);
}

function esvaziarCarrinho() {
  localStorage.removeItem("carrinho");
  estado.carrinho = [];
  renderizarCarrinho();
}
function finalizarPedido() {
  esvaziarCarrinho();
  mostrarAviso();
}
