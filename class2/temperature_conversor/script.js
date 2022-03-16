// Desafio 2: Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.

function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmTempNumerico = parseFloat(valor);

  var valorEmKelvin = (valorEmTempNumerico + 273.15).toFixed(2);
  console.log(valorEmKelvin);

  var valorEmFarenheit = (valorEmTempNumerico * 1.8 + 32).toFixed(2);
  console.log(valorEmFarenheit);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido =
    "Em Kelvin: " + valorEmKelvin + "  Em Farenheit: " + valorEmFarenheit;
  elementoValorConvertido.innerHTML = valorConvertido;
}