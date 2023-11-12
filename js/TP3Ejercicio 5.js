function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas"
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas"
    } else {
        return "La cadena es una mezcla de mayúsculas y minúsculas"
    }
}

const cadenaEjemplo = "BuenasNochesGenteHermosa"
const resultadoAnalisis = analizarCadena(cadenaEjemplo)

console.log(resultadoAnalisis)

document.write("<h2>Resultado del Análisis:</h2>")
document.write(`<p>${resultadoAnalisis}</p>`)