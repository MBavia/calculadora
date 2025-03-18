let res = document.getElementById("res");

        function calcular(operacao) {
            let n1 = Number(document.getElementById("n1").value);
            let n2 = Number(document.getElementById("n2").value);
            let resultado = "";

            if (operacao === 'soma') {
                resultado = `O resultado da soma entre ${n1} e ${n2} é ${n1 + n2}`;
            } else if (operacao === 'subtracao') {
                resultado = `O resultado da subtração entre ${n1} e ${n2} é ${n1 - n2}`;
            } else if (operacao === 'multiplicacao') {
                resultado = `O resultado da multiplicação entre ${n1} e ${n2} é ${n1 * n2}`;
            } else if (operacao === 'divisao') {
                if (n2 === 0) {
                    resultado = "Erro: divisão por zero não é permitida!";
                } else {
                    resultado = `O resultado da divisão entre ${n1} e ${n2} é ${(n1 / n2).toFixed(2)}`;
                }
            } else if (operacao === 'potencia') {
                resultado = `${n1} elevado a ${n2} é ${Math.pow(n1, n2)}`;
            } else if (operacao === 'raiz') {
                resultado = `A raiz quadrada de ${n1} é ${Math.sqrt(n1).toFixed(2)}`;
            }

            res.innerHTML += `<p>${resultado}</p>`;
        }

        function limpar() {
            res.innerHTML = "Aqui irão aparecer os resultados...";
        }