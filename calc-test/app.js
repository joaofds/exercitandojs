
// definindo variaveis
var n1 = prompt('Insira o primeiro valor: ')
var n2 = prompt('Insira o segundo valor: ')
var result = null
var h3 = document.getElementById('calc')

var operator = prompt(
    'Qual operação deseja fazer?'
        +'\n +  para somar'
        +'\n -  para subtrair'
        +'\n /  para h3idir'
        +'\n *  para multiplicar'
    )


// convertendo string para float
n1 = parseFloat(n1)
n2 = parseFloat(n2)

// compara e realiza calculos
switch (operator) {
    case '+':
        result = n1 + n2
        h3.innerHTML = n1 +" + " +n2 +" = " +result
    break;
    case '-':
        result = n1 - n2
        h3.innerHTML = n1 +" - " +n2 +" = " +result 
    break;
    case '*':
        result = n1 * n2
        h3.innerHTML = n1 +" x " +n2 +" = " +result 
    break;
    case '/':
        result = n1 / n2
        h3.innerHTML = n1 +" ÷ " +n2 +" = " +result 
    break;
    default:
        if(!alert('Operação inválida, tente novamente...')){window.location.reload()}
}
