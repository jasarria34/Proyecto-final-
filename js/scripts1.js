// Función que se ejecutará al hacer clic en el botón
function realizarConsulta() {
    // Aquí puedes agregar la lógica de la consulta
    // Por ejemplo, una solicitud AJAX a un servidor
    const texto = document.getElementById('inputTexto').value;
    console.log("Consulta realizada");

    // Ejemplo de solicitud AJAX utilizando fetch (consulta a una API pública)
    fetch(`https://restcountries.com/v3.1/name/${texto}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            mostrarResultado(data)
            // Puedes procesar los datos aquí
        })
        .catch(error => {
            console.error('Error en la consulta:', error);
        });
}

// Asocia la función al evento click del botón
document.getElementById('consultaBtn').addEventListener('click', realizarConsulta);
document.getElementById('celular').addEventListener('click', realizarConsulta);
function mostrarResultado(data) {
    const resultadoDiv = document.getElementById('resultado');
    // Aquí puedes personalizar cómo quieres mostrar los datos
    resultadoDiv.innerHTML = 
    `<h1>Capital: ${data[0].capital}</h1>
    <h2>Region: ${data[0].region}</h2>
    <h2>Sub Region: ${data[0].subregion}</h2>
    <h2>${data[0].timezones}</h2>
    <div>
    <img class="img-bandera" src="${data[0].flags.png}" alt="Bandera">
    </div>
    `;
    
}