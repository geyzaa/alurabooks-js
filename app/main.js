let livros = [] 
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI()

/*função assincrona, facilita no caso de muitos livros cadastrados 
para a função não demorar, "esperar uma promessa"*/
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    console.table(livros)
}

