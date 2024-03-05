exemplo do uso do forEach substituindo o for 

let livros = ['Js','Python','Go']

for (let i=0; i < livros.length; i++) {
    console.log(livros[i])
}

usando forEach "para cada item da lista, executa uma função"

livros.forEach(livro => {
    console.log(livro)
})