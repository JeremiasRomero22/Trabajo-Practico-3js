function esParOImpar(numero) {
    const resultado = (numero % 2 === 0) ? "par" : "impar"
    return `El número ${numero} es ${resultado}`
}

const numeroEjemplo = 10
const resultadoFuncion = esParOImpar(numeroEjemplo)

console.log(resultadoFuncion)

document.write("<h2>Resultado:</h2>")
document.write(`<p>${resultadoFuncion}</p>`)