const temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"))

    if (isNaN(temperaturaCelsius)) {
        alert("Por favor, ingrese una temperatura válida.")
    } else {
      
        const temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius)

        console.log(`${temperaturaCelsius} grados Celsius equivalen a ${temperaturaFahrenheit} grados Fahrenheit.`)

        document.write("<h2>Resultado:</h2>")
        document.write(`<p>${temperaturaCelsius} grados Celsius equivalen a ${temperaturaFahrenheit} grados Fahrenheit.</p>`)
    }

    function convertirCelsiusAFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }
