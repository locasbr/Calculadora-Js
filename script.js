let operadores = prompt(`Escolha um operador: \n+\n-\n*\n/`)

let n1 = prompt('digite o seu numero')
let n2 = prompt('digite o seu numero')
let result;

function operadorescolhido(operadores) {
  if (operadores == '+') {
    result = n1 + n2;
    alert(result)
  }

  else if (operadores == '-') {
    result = n1 - n2;
    alert(result)
  } else if (operadores == '*') {
    result = n1 * n2;
    alert(result)
  } else if (operadores == '/') {
    result = n1 / n2;
    alert(result)
  } else alert('deu algum problema')

}
operadorescolhido()