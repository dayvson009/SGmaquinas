
function mudarCategoria (elemento, classe) {
  
  let categorias = document.querySelectorAll(".item-categoria")
  for (let i = 0; i<categorias.length; i++) {
      categorias[i].classList.remove("active")
  }

  elemento.classList.add("active")

  let produtos = document.querySelectorAll(".produto_")
  for (let i = 0; i<produtos.length; i++) {
    produtos[i].style.display="none"
  }
  let produtoSelecionado = document.querySelector(classe)
  produtoSelecionado.style.display="inline-block"

}
