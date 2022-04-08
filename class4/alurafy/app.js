var listaFilmes = [];

function Lista() {
    var filme = document.getElementById("filme").value;
    listaFilmes.push(filme);
    var ultimoItemNumero = listaFilmes.length - 1;
    var check = 0;

    if(listaFilmes.length > 1) {
        for(var i = 0; i < listaFilmes.length; i++) {
            if(listaFilmes[listaFilmes.length-1] == listaFilmes[i - 1]) {
                console.error("Filme repetido.");
                alert("Filme repetido");
                listaFilmes.pop()
                check = 1;
            } else if(i == ultimoItemNumero && check == 0) {
                listarFilmesNaTela(filme);
                check = 0;
            }
        }
    } else {
        listarFilmesNaTela(filme);
    }
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementolistaFilmes = document.getElementById("listaFilmes");
    elementolistaFilmes.innerHTML = elementolistaFilmes.innerHTML + elementoFilmeFavorito;
}

// escolher outro tema pra aparacer na página (escolhi albuns)
// usar outras estruturas de loop como foreach e while
// criar condição para não repetir informações
// criar um campo e botão para adicionar a imagem pela tela e nao pelo código

