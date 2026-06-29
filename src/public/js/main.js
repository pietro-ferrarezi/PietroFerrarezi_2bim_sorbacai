function mostrarAviso() {
  const aviso = document.querySelector(".aviso-caixa");
  aviso.style.display = "block";
  setTimeout(() => {
    aviso.style.display = "none";
  }, 2000);
}