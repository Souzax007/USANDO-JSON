function carregar(){
    fetch("conteudo.json")
        .then(response => response.json())
        .then(conteudo => {
            const conteiner = document.getElementById("conteiner");

            conteudo.map(conteudo => {

                const card = document.createElement("div");
                card.classList.add("card");

                const inner = document.createElement("div");
                inner.classList.add("card-inner");

                const front = document.createElement("div");
                front.classList.add("card-front");

                const img = document.createElement("img");
                img.src = conteudo.img;

                const titulo = document.createElement("h3");
                titulo.textContent = conteudo.nome;

                const visualizar = document.createElement("button");
                visualizar.textContent = "Visualizar";
                
                visualizar.onclick = function() {
                    document.getElementById("modal").style.display = "block";
                    document.getElementById("modalImg").src = conteudo.img;
                };

                front.appendChild(img);
                front.appendChild(titulo);

                const back = document.createElement("div");
                back.classList.add("card-back");

                const textoVerso = document.createElement("p");
                textoVerso.textContent = "Irei colocar o valor de cada carta.";

                back.appendChild(textoVerso);

                inner.appendChild(front);
                inner.appendChild(back);
                card.appendChild(inner);
                back.appendChild(visualizar);
                conteiner.appendChild(card);
            });
        });

    document.getElementById("fecharModal").onclick = function() {
        document.getElementById("modal").style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === document.getElementById("modal")) {
            document.getElementById("modal").style.display = "none";
        }
    };
}
carregar();