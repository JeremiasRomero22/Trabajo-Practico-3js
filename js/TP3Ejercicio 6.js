const ladoAC = parseFloat(prompt("Ingrese el valor del lado AC del rectángulo:"))
const ladoBD = parseFloat(prompt("Ingrese el valor del lado BD del rectángulo:"))


if (isNaN(ladoAC) || isNaN(ladoBD)) {
    alert("Por favor, ingrese valores numéricos válidos.")
} else {
  
    const perimetro = calcularPerimetro(ladoAC, ladoBD)

    document.write("<h2>Resultado:</h2>")
    document.write(`<p>El perímetro del rectángulo es: ${perimetro}</p>`)
}

function calcularPerimetro(a, b) {
    return 2 * (a + b);
}