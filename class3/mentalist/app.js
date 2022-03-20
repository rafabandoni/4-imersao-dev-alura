var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    console.log(chute);
    
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou!";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10";
    } else {
        elementoResultado.innerHTML = "Você errou!";
    }
}