
// Get the HTML output element
const htmlOutput = document.getElementById('html-output');
const htmlPreview = document.getElementById('html-preview');
const copyButton = document.getElementById('copy-button');

// Define the generateHtml function
function generateHtml() {
  updateHtmlOutput();
  const html = htmlOutput.innerText;
  htmlPreview.innerHTML = html;
  copyButton.style.display = 'block';
}

function updateHtmlOutput() {
  const form = document.getElementById('program-form');
  const formData = new FormData(form);
  const programName = formData.get('program-name');
  const programPortada = formData.get('program-portada');
  const programDescription = formData.get('program-description');
  const programCaptura1 = formData.get('program-captura-1');
  const programCaptura2 = formData.get('program-captura-2');
  const programCaptura3 = formData.get('program-captura-3');
  const programEnlace = formData.get('program-enlace');
  const programEnlacePremium = formData.get('program-enlace-premium');
  const softwareTitle = formData.get('software-title');
  const softwareVersion = formData.get('software-version');
  const softwareSize = formData.get('software-size');
  const softwareMedicine = formData.get('software-medicine');
  const softwareLanguage = formData.get('software-language');
  const softwareUpdateDate = formData.get('software-update-date');
  const softwareOs = formData.get('software-os');

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
            margin: 0;
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
          <img src="${programPortada}" alt="Portada del Juego">
          <div class="game-details">
            <h1>${programName}</h1>
            <p>${programDescription}</p>
          </div>
        </section>
        <section class="game-info">
          <h2>Descripcion del Software</h2>
          <p style="COLOR: BLACK;text-align: center;">${programDescription}</p>
          <h2>Datos del Software</h2>
          <p style="text-align: center;color: black;">Titulo: <strong>${softwareTitle}</strong><br> Versión:${softwareVersion} <br> Tamaño:${softwareSize} <br> Medicina:${softwareMedicine} <br> Idioma:${softwareLanguage} <br> Fecha de Actualización:${softwareUpdateDate} <br> Sistema Operativo:${softwareOs} </p>
        </section>
        <br>
        <section class="game-images">
          <h2>CAPTURAS</h2>
          <div>
            <img src="${programCaptura1}" alt="Imagen del Juego 1">
            <img src="${programCaptura2}" alt="Imagen del Juego 2">
            <img src="${programCaptura3}" alt="Imagen del Juego 3">
          </div>
        </section>
        <section class="download-section">
          <a href="${programEnlace}" target="_blank">
            <button class="download-button">DESCARGAR</button>
          </a>
          <div class="key-container">
            Clave: <span id="download-key">www.compucalitv.pro</span>
            <button class="copy-button" onclick="copyKey()">Copiar</button>
          </div>
          <br><br>
          <a href="${programEnlacePremium}" target="_blank">
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

  htmlOutput.innerText = html;
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
