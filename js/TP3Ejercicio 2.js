const ciudades = [];

    
    while (true) {
        let ciudad = prompt("Ingrese el nombre de una ciudad:");

        
        if (ciudad === null || ciudad === "") {
            break;  
        }

        ciudades.push(ciudad);
    }

   
    console.log("Arreglo de Ciudades:", ciudades);

   
    console.log("Longitud del Arreglo:", ciudades.length);

   
    document.write("<h2>Ciudades en Posiciones Específicas:</h2>");
    document.write(`<p>Primera Ciudad: ${ciudades[0]}</p>`);
    document.write(`<p>Tercera Ciudad: ${ciudades[2]}</p>`);
    document.write(`<p>Última Ciudad: ${ciudades[ciudades.length - 1]}</p>`);

    
    ciudades.push("París");

   
    console.log("Arreglo Actualizado con París:", ciudades);

  
    document.write("<h2>Segunda Ciudad:</h2>");
    document.write(`<p>${ciudades[1]}</p>`);

 
    ciudades[1] = "Barcelona";

  
    console.log("Arreglo Final con Barcelona:", ciudades);