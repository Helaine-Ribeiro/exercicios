// exercicio 1
//  ajude o professor, ele digitara 3 notas , calcule a media e retorne 
//  se ele passou ou não de ano  , não enviar em console.log


// Função para calcular a média das 3 notas
function calcularMedia(nota1, nota2, nota3) {
    var soma = nota1 + nota2 + nota3;
    var media = soma / 3;
    return media.toFixed(2);
  }
  
  // Função para verificar se o professor passou de ano
  function verificarAprovacao(media) {
    if (media >= 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
  // Função principal
  function calcularMediaEVerificarAprovacao() {
    var nota1 = parseFloat(prompt("Digite a primeira nota:"));
    var nota2 = parseFloat(prompt("Digite a segunda nota:"));
    var nota3 = parseFloat(prompt("Digite a terceira nota:"));
  
    var media = calcularMedia(nota1, nota2, nota3);
    var situacao = verificarAprovacao(media);
  
    document.getElementById("resultado").innerHTML = "Média: " + media + "<br>Situação: " + situacao;
  }
  