exemplo do uso do forEach substituindo o for 

let livros = ['Js','Python','Go']

for (let i=0; i < livros.length; i++) {
    console.log(livros[i])
}

usando forEach "para cada item da lista, executa uma função"

livros.forEach(livro => {
    console.log(livro)
})

função map 
ex: 
const array1 = [1, 4, 9, 16];

//passe uma função para mapear
const map1 = array1.map(x => x * 2);

console.log(map1);
//expected output : array [2, 8, 18, 32]