// Desafio 2: Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.

function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKmNumerico = parseFloat(valor);

  var valorEmAnosLuz = valorEmKmNumerico / 9460800000000;
  console.log(valorEmAnosLuz);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "Você demoraria " +
    valorEmAnosLuz +
    " anos na velocidade da luz para chegar.";
  elementoValorConvertido.innerHTML = valorConvertido;
}