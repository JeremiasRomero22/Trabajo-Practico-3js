const limiteSuperior = parseInt(prompt("Ingrese un número entero"))


if (isNaN(limiteSuperior) || limiteSuperior < 2) {
    alert("ingrese un número entero válido mayor o igual a 2.")
} else {
    
    const primos = generarNumerosPrimos(limiteSuperior)

    console.log(`Números primos hasta ${limiteSuperior}:`, primos)
    document.write("<h2>Números Primos</h2>")
    document.write(`<p>Números primos hasta ${limiteSuperior}: ${primos.join(', ')}</p>`)
}

function generarNumerosPrimos(limite) {
    const primos = [];

    for (let numero = 2; numero <= limite; numero++) {
        if (esPrimo(numero)) {
            primos.push(numero)
        }
    }

    return primos;
}
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return numero > 1;
}