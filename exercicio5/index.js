function gerarTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabuadaDiv = document.getElementById("tabuada");
    tabuadaDiv.innerHTML = "";

    if (isNaN(numero)) {
        tabuadaDiv.textContent = "Por favor, digite um número válido.";
    } else {
        var table = document.createElement("table");
        for (var i = 1; i <= 10; i++) {
            var row = document.createElement("tr");
            var multiplicandoCell = document.createElement("td");
            var simboloCell = document.createElement("td");
            var multiplicadorCell = document.createElement("td");
            var igualCell = document.createElement("td");
            var resultadoCell = document.createElement("td");

            multiplicandoCell.textContent = numero;
            simboloCell.textContent = "x";
            multiplicadorCell.textContent = i;
            igualCell.textContent = "=";
            resultadoCell.textContent = numero * i;

            row.appendChild(multiplicandoCell);
            row.appendChild(simboloCell);
            row.appendChild(multiplicadorCell);
            row.appendChild(igualCell);
            row.appendChild(resultadoCell);

            table.appendChild(row);
        }
        tabuadaDiv.appendChild(table);
    }
}


