// exercicio 2
// 1 = pedra
// 2 = papel
// 3 = tesoura
// sempreee asumiir que eu vou jogar tesoura
// if 
// else 
// quem ganhou

// console.log('wasdsasadas consoleeeeeee')
// document.write(`<div>asdsadsa</div>`)
// innerHTMl ou textContent

// mapas || mapeamento 
// DOM - Modelo de Objeto de Documentos 

// var input = document.querySelector('.input')
// var button = document.querySelector('.button')
// var result = document.querySelector('.result')

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// button.addEventListener('click', function () {
//   var number = Number(input.value) //1
//   // i = i+1  == i+=1 == i++
//   for (var i = 0; i < array.length; i++) {
//     result.innerHTML +=
//       `<li>${number}X ${array[i]} = ${number * array[i]}</li>`
//   }
// })

// index
// mapas
// for
// for of
// for in
// map
// reduce // 0  1  2  3  4  5  6  7  8  9



// loop       
// for (var i = 0; i <= 9; i = i + 1) {
//   console.log([i])
// }

// Função para jogar pedra, papel ou tesoura
function jogarJokenpo(escolha) {
    // Números:
    // 1 - Pedra
    // 2 - Papel
    // 3 - Tesoura
  
    var minhaEscolha = 3; // Sempre assume que eu vou jogar tesoura
    var resultado;
  
    if (escolha === minhaEscolha) {
      resultado = "Empate";
    } else if (
      (escolha === 1 && minhaEscolha === 2) ||
      (escolha === 2 && minhaEscolha === 3) ||
      (escolha === 3 && minhaEscolha === 1)
    ) {
      resultado = "Você ganhou!";
    } else {
      resultado = "Você perdeu!";
    }
  
    return resultado;
  }
  
  // Função para executar o jogo
  function jogar() {
    var escolhaUsuario = parseInt(prompt("Escolha:\n1 - Pedra\n2 - Papel\n3 - Tesoura"));
  
    var resultadoJogo = jogarJokenpo(escolhaUsuario);
  
    document.getElementById("resultado").innerHTML = resultadoJogo;
  }
  
  