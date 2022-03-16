var nome = "Rafael"
var notaPrimeiroBimestre = 9.35
var notaSegundoBimestre = 8
var notaTerceiroBimestre = 6.85
var notaQuartoBimestre = 7.38


var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem-vindo, " + nome)
console.log(notaFixada)

// Desafio 1: Dependendo da nota, mostrar se a aluna ou aluno foi aprovada(o) ou não
if (notaFixada >= 7) {
  var mediaPassou = "passou!"
} else {
  var mediaPassou = "não passou :/"
}

// Desafio 3: Imprimir na própria página o resultado, ao invés do console
var elementoResultaoFinal = document.getElementById("resultadoFinal")
var avisoAluno = "Olá, " + nome + "! Sua média final é de " + notaFixada + ". Você " + mediaPassou
elementoResultaoFinal.innerHTML = avisoAluno

// Desafio 5: Colocar a conta inteira da média em apenas uma linha
console.log(((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(1))