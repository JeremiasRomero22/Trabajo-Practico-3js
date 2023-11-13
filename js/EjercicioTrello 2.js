const entradaUsuario = prompt("Ingrese números que sean separados por coma )ejemplo, 1, 2, 3)")
    
const numeros = entradaUsuario.split(',').map(numero => parseInt(numero.trim()))

const numerosPares = filtrarNumerosPares(numeros)

console.log("Arreglo Original:", numeros)
console.log("Números Pares:", numerosPares)

document.write("<h2>Resultados:</h2>")
document.write("<p>Arreglo Original: " + numeros.join(', ') + "</p>")
document.write("<p>Números Pares: " + numerosPares.join(', ') + "</p>")

function filtrarNumerosPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0)
}