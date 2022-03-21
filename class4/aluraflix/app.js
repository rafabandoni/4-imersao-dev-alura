var listaFilmes = [
    "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91382RVTr3L.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjEwOTMzNjYzMl5BMl5BanBnXkFtZTcwNjczMTQyMQ@@._V1_FMjpg_UX1000_.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
}