fetch (endpointDaAPI) //busca a API



//método forEach() executa uma função em cada elemento de um array
//exemplo do uso do forEach substituindo o for 

let livros = ['Js','Python','Go']

for (let i=0; i < livros.length; i++) {
    console.log(livros[i])
}

usando forEach "para cada item da lista, executa uma função"

livros.forEach(livro => {
    console.log(livro)
})



função map 
/*o método map invoca uma função callback passada por argumento
para cada elemento do array e devolve um novo array como resultado*/
ex: 
const array1 = [1, 4, 9, 16];

//passe uma função para mapear
const map1 = array1.map(x => x * 2);

console.log(map1);
//expected output : array [2, 8, 18, 32]



função filter
/*cria um novo array com todos os elementos que 
passaram no este implementado pela função fornecida*/

const idades = [10, 22, 42, 16, 50]

const podeDirigir = idades.filter(idade => {
    return idade >= 18
})

console.log (podeDirigir) //22,42,50
console.log(idades) //10, 22, 42, 16, 50 n muda o array, 
//cria um novo array com a resposta



//o método sort() ordena os elementos do próprio array e retorna o array. 
//A ordenação não é necessariamente estável. A ordenação padrão é de acordo 
//com a pontuação de código unicode

ex. [1,5,10,6] retorna 1, 10, 5, 6

ex do uso do sort() para ordenar. 

let precos = [29,11,1,101,110]
//.            1,11,29,101,110

let precosOrdenados = precos.sort((a,b) => a - b ) 
console.log(precosOrdenados)

obs: b - a = do maior para o menor 
a - b = do menor para o maior
parâmetro a e b são a comparação dos arrays
elemento undefined é classificado como último



//método reduce() executa uma função reducer (fornecida por você) 
//para cada elemento do array, resultando num único valor de retorno

//imagem map filter e reducer no google explica claramente o que cada função faz

const precos = [10, 20, 70]

const precoTotal = precos.reduce((acc, atual) => acc + atual) 

console.log(precoTotal)

//para devolver o maior valor ex:
const precoTotal = precos.reduce((acc, atual) => acc > atual? acc : atual)