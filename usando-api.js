const input = document.getElementById("personagem");
const btn = document.getElementById("btn-pesquisar");
const formatação = document.getElementById("container");
const imagem = document.getElementById("img");

const fetchApi = (value) => {
    const resultado = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((resposta) => resposta.json())
    .then((data) =>{
        console.log(data);
        return data;
    });
    
    return resultado;
}

btn.addEventListener('click', async (event) =>{
    event.preventDefault();
    const result = await fetchApi(personagem.value);
    container.textContent = `${JSON.stringify(result, undefined,2)}`;
    imagem.src = `${result.image}`;
});

