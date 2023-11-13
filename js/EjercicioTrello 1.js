function encontrarNumeroMayor(numero1, numero2) {
    if (numero1 === numero2) {
        return "Los números son iguales.";
    } else if (numero1 > numero2) {
        return `El número mayor es: ${numero1}`
    } else {
        return `El número mayor es: ${numero2}`
    }
}

const numeroA = parseFloat(prompt("Ingrese el primer número:"))
const numeroB = parseFloat(prompt("Ingrese el segundo número:"))

if (isNaN(numeroA) || isNaN(numeroB)) {
    alert("Por favor, ingrese valores numéricos válidos.")
} else {
  
    const resultado = encontrarNumeroMayor(numeroA, numeroB);

    console.log(resultado);
    document.write(`<p>${resultado}</p>`)
}
