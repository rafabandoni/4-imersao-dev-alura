var listaFilmes = [];

function lista() {
    var filme = document.getElementById("filmes").value;

    do
        listaFilmes.push(filme);
    while (listaFilmes.length = 0)
    for(var i = 0; i < listaFilmes; i++) {
        for(var j = 0; j < listaFilmes; j++) {
            if (i != j) {
                if (listaFilmes[i] == listaFilmes[j]) {
                    console.log("Filmes iguais.");
                } else {
                    listaFilmes.push(filmes);
                }
            }
        }
    }
    for (var i = 0; i < listaFilmes.length; i++) {
        document.write("<img src=" + listaFilmes[i] + ">");
    }
}

// escolher outro tema pra aparacer na página (escolhi albuns)
// usar outras estruturas de loop como foreach e while
// criar condição para não repetir informações
// criar um campo e botão para adicionar a imagem pela tela e nao pelo código

