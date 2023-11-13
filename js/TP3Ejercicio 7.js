const numeroIngresado = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"))

    if (isNaN(numeroIngresado)) {
        alert("Por favor, ingrese un número válido.")
    } else {
        
        mostrarTablaMultiplicar(numeroIngresado)
    }
 
    function mostrarTablaMultiplicar(numero) {
      
        console.log(`Tabla de Multiplicar del ${numero}:`)
        document.write("<h2>Tabla de Multiplicar</h2>")
        document.write(`<p>Tabla del ${numero}:</p>`)
        document.write("<ul>");

        
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i
            
           
            console.log(`${numero} x ${i} = ${resultado}`)
            
            
            document.write(`<li>${numero} x ${i} = ${resultado}</li>`)
        }
        document.write("</ul>")
    }