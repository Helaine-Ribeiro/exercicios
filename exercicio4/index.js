// exercicio 4
//  ajude o professor, ele digitara 3 notas em uma função , calcule a media em outra função e retorne 
//  se ele passou ou não de ano  em uma terceira função
// deixa BUNITO estiliza bastante. innerHTML e o input e functions, usar sem moderação

// function funcao1() {} //guarda o valor das 3 notas digitadas
// function funcao2() {} //calcula a media das 3 notas
// function funcao3() {} //imprimi na tela se passou de ano

// if ( todosEntregam ){
//   faz calculadora
// } else {
//   acaba o curso
// }

// Função para guardar o valor das 3 notas digitadas
function obterNotas() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    return [nota1, nota2, nota3];
  }
  
  // Função para calcular a média das 3 notas
  function calcularMedia(notas) {
    var soma = notas.reduce(function (acc, nota) {
      return acc + nota;
    }, 0);
    var media = soma / notas.length;
    return media.toFixed(2);
  }
  
  // Função para imprimir na tela se passou de ano
  function imprimirResultado(aprovado) {
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = aprovado
      ? '<span class="aprovado">Parabéns! Você passou de ano.</span>'
      : '<span class="reprovado">Infelizmente você não passou de ano.</span>';
  }
  
  // Função principal que é chamada ao clicar no botão
  function calcularMediaEVerificarAprovacao() {
    var notas = obterNotas();
    var media = calcularMedia(notas);
    var passouDeAno = media >= 7;
    imprimirResultado(passouDeAno);
  }
  