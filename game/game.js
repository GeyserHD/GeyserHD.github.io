// Get the HTML output element
const htmlOutput = document.getElementById('html-output');
const htmlPreview = document.getElementById('html-preview');
const copyButton = document.getElementById('copy-button');

function updateHtmlOutput() {
  const form = document.getElementById('game-form');
  const formData = new FormData(form);
  console.log('Form data:', formData); 
  const gameName = formData.get('game-name');
  const gamePortada = formData.get('game-portada');
  const gameDescription = formData.get('game-description');
  const gameCaptura1 = formData.get('game-captura-1');
  const gameCaptura2 = formData.get('game-captura-2');
  const gameCaptura3 = formData.get('game-captura-3');
  const gameEnlacePremium = formData.get('game-enlace-premium');
  const gameDatos = formData.get('game-datos');
  const gameVersion = formData.get('game-version');
  const gameSize = formData.get('game-size');
  const gameFormat = formData.get('game-format');
  const gameLanguage = formData.get('game-language')
  const gameUpdateDate = formData.get('game-update-date');
  const gameOs = formData.get('game-os');
  const gameLink = formData.get('game-link');


  const html = `
  <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portada del Juego</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f0f2f5;
            padding: 0;
        }
        .game-container {
            width: 95%;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        .game-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        .game-header img {
            width: 300px;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .game-details {
            flex-grow: 1;
            margin-left: 20px;
        }
        .game-details h1 {
            font-size: 2.5em;
            margin: 0;
            color: black;
        }
        .game-details p {
            margin: 10px 0;
            font-size: 1.2em;
            color: #000000;
        }
        .game-info {
            margin: 60px 0;
        }
        .game-info h2 {
            padding-bottom: 10px;
            border-bottom: 2px solid #007bff;
            color: #007bff;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .game-info ul {
            list-style: none;
            padding: 0;
            line-height: 1.6;
            color: #333;
        }
        .game-info ul li {
            margin: 8px 0;
        }
        .game-images {
            margin: 20px 0;
            padding: 20px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .game-images h2 {
            padding-bottom: 10px;
            border-bottom: 2px solid #007bff;
            color: #007bff;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .game-images div {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        .game-images img {
            width: calc(33.333% - 20px);
            max-width: 300px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
        }
        .game-images img:hover {
            transform: scale(1.05);
        }
        .download-section {
            text-align: center;
            margin: 40px 0;
        }
        .download-button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 1.2em;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .download-button:hover {
            background-color: #0056b3;
        }
        .key-container {
            margin-top: 20px;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            background: #f9f9f9;
        }
        .key-container span {
            font-weight: bold;
        }
        .copy-button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 5px 10px;
            font-size: 1em;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 10px;
            transition: background-color 0.3s;
        }
        .copy-button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
      <div class="game-container">
        <section class="game-header">
          <img src="${gamePortada}" alt="Portada del Juego">
          <div class="game-details">
            <h1>${gameName}</h1>
            <p>${gameDescription}</p>
          </div>
        </section>
        <section class="game-info">
          <h2>Descripcion del Juego</h2>
          <p style="COLOR: BLACK;text-align: center;">${gameDescription}</p>
          <section class="game-info">
          <h2>Datos del Juego</h2>
          <p style="text-align: center;color: black;">Titulo: <strong>${gameName}</strong><br> Versión: ${gameVersion} <br> Tamaño: ${gameSize} <br> Formato: ${gameFormat} <br> Idiomas y voces: ${gameLanguage} <br> Fecha de Lanzamiento: ${gameUpdateDate} <br> Sistema Operativo: ${gameOs} </p>

          <ul style="COLOR: BLACK;text-align: center;">
          ${gameDatos.split("\n").map((line) => `<li>${line}</li>`).join("")}
          </ul>
          </section>
        <br>
        <section class="game-images">
          <h2>CAPTURAS</h2>
          <div>
            <img src="${gameCaptura1}" alt="Imagen del Juego 1">
            <img src="${gameCaptura2}" alt="Imagen del Juego 2">
            <img src="${gameCaptura3}" alt="Imagen del Juego 3">
          </div>
        </section>
        <section class="download-section">
          <a href="${gameLink}" target="_blank">
            <button class="download-button">DESCARGAR</button>
          </a>
          <div class="key-container">
            Clave: <span id="download-key">www.compucalitv.pro</span>
            <button class="copy-button" onclick="copyKey()">Copiar</button>
          </div>
          <br><br>
          <a href="${gameEnlacePremium}" target="_blank">
            <button class="download-button">DESCARGAR PREMIUM</button>
          </a>
        </section>
      </div>
      <script>
        function copyKey() {
            var keyText = document.getElementById("download-key").textContent;
            navigator.clipboard.writeText(keyText).then(function() {
                alert("Clave copiada: " + keyText);
            }, function(err) {
                console.error("Error al copiar la clave: ", err);
            });
        }
    </script>
</body>
</html>
 <br><br> <br><br> <br><br>

<center>
    
    </div></center>
 <center>
</center>
`;

console.log('Generated HTML:', html); // Add this console log to verify HTML generation
htmlOutput.innerText = html;
}

function generateHtml() {
updateHtmlOutput();
const html = htmlOutput.innerText;
console.log('HTML output:', html); // Add this console log to verify HTML output
htmlPreview.innerHTML = html;
copyButton.style.display = 'block';
}


// Define the copyHtml function
function copyHtml() {
  const html = htmlOutput.innerText;
  navigator.clipboard.writeText(html).then(function() {
    alert("HTML copiado al portapapeles");
  }, function(err) {
    console.error("Error al copiar el HTML: ", err);
  });
}

// Add event listener to the "Generar HTML" button
document.getElementById('generate-html').addEventListener('click', generateHtml);

// Add event listener to the "Copiar" button
copyButton.addEventListener('click', copyHtml);

//acortador
const apiKeyCuty = 'a1e38299b3fa636349c7874a9';
  const apiKeyShrinkme = '78a91cfc47f6a3478f1997120a950007b9f0176a';
  const apiUrlShrinkme = `https://shrinkme.io/api?api=${apiKeyShrinkme}&format=text&url=`;
  const apiUrlCuty = `https://api.cuty.io/quick?token=${apiKeyCuty}&format=text&url=`;


  document.getElementById('acortar-enlace').addEventListener('click', (e) => {
    e.preventDefault(); // Evitamos que la página se recargue
    const enlaceOriginal = document.getElementById('enlace-original').value;
    const acortadorSeleccionado = document.getElementById('selector-acortador').value;
    let apiUrl;

    if (acortadorSeleccionado === 'hrinkme') {
      apiUrl = apiUrlShrinkme;
    } else if (acortadorSeleccionado === 'cuty') {
      apiUrl = apiUrlCuty;
    }

    fetch(apiUrl + encodeURIComponent(enlaceOriginal))
     .then(response => response.text())
     .then(data => {
        document.getElementById('enlace-original').value = data;
      })
     .catch(error => console.error('Error al acortar enlace:', error));
  });

  document.getElementById('copiar-enlace').addEventListener('click', (e) => {
    e.preventDefault(); // Evitamos que la página se recargue
    const enlaceAcortado = document.getElementById('enlace-original').value;
    navigator.clipboard.writeText(enlaceAcortado);
    alert('Enlace acortado copiado al portapapeles');
  });
