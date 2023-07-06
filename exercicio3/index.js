// exercicio 3
// digitar um numero até 10 
// 3 = 1, 2

// 7 = 1, 2, 3, 4, 5, 6


// console.log('aula de funções')


// const nota1 = 1
// // escopo {}
// function teste() {
//   const nota1 = 3
// }
// teste()


// console.log('teste', nota1)



// function helloWorld() {
//   console.log('hello world')
// }

// function soma(numero1, numero2) {
//   return numero1 + numero2
// }

// function selecionaDOM() {
//   const input1 = document.querySelector('.value1')
//   const input2 = document.querySelector('.value2')
//   const button = document.querySelector('.button')

//   button.addEventListener('click', function () {
//     const valorDaSoma = soma(Number(input1.value), Number(input2.value))

//     resultado(valorDaSoma)
//     console.log('resultado', resultado)
//   })
// }

// function resultado(resultadoSoma) {
//   const resultado = document.querySelector('.result')

//   resultado.innerHTML = `<h1>${resultadoSoma}</h1>`
// }
// selecionaDOM()


function exibirNumeros() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "";
    
    for (var i = 0; i <= 10; i++) {
        if (i !== numero) {
            resultadoDiv.textContent += i + " ";
        }
    }
}

  