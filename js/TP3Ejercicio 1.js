
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

console.log (meses.length)

console.log (meses)

document.write("<h2>Meses del año:</h2>");

document.write("<ul>");

for (let i = 0; i < meses.length; i++) {
    document.write(`<li>${meses[i]}</li>`);
}

document.write("</ul>");