// usando listas
var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"];

listaFilmes.push("Harry Potter");

listaFilmes.push("Senhor dos Aneis");

// é possível usar todas as tags do html aqui
// usando o for
for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<p>" + listaFilmes[i] + "</p>");
}