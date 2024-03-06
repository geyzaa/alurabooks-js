const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront')
btnFiltrarLivrosDeFront.addEventListener('click', filtrarLivrosDeFront)

function filtrarLivros () {
    let livrosFiltrados = livros.filter(livro => livro.categoria =='front-end') 
    console.table(livrosFiltrados)
}