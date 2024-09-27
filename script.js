const fs = require("fs");
const path = require("path");

// Configura las rutas de las carpetas
const iconFolder = path.join(__dirname, "icons"); // Ruta a la carpeta de íconos
const outputFolder = path.join(__dirname, "output"); // Carpeta de salida para los JSON

// Asegúrate de que la carpeta de salida exista
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

function getAllSvgFiles(dir) {
  const results = [];

  // Lee los archivos en el directorio
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Si es un directorio, llama recursivamente
      results.push(...getAllSvgFiles(filePath));
    } else if (file.endsWith(".svg")) {
      // Si es un archivo SVG, agrega su ruta
      const relativePath = path
        .relative(__dirname, filePath)
        .replace(/\\/g, "/"); // Cambia \\ por /
      results.push({
        name: file.split(".")[0], // Nombre del ícono sin la extensión
        url: `https://raw.githubusercontent.com/obed-tc/IconVerse/70606adc13f08e4051744d1258cb187c7d562c59/${relativePath}`, // Cambia la URL según tu repositorio
      });
    }
  });

  return results;
}

function generateIconsJson(dir) {
  // Obtener todos los archivos SVG en la carpeta actual
  const icons = getAllSvgFiles(dir);

  // Solo generar el archivo JSON si hay íconos
  if (icons.length > 0) {
    const folderName = path.basename(dir);
    const outputFile = path.join(outputFolder, `${folderName}.json`);
    fs.writeFileSync(outputFile, JSON.stringify(icons, null, 2));
    console.log(`JSON de íconos en ${folderName} generado en ${outputFile}`);
  }

  // Obtener y procesar subcarpetas
  const subfolders = fs.readdirSync(dir).filter((file) => {
    const filePath = path.join(dir, file);
    return fs.statSync(filePath).isDirectory();
  });

  subfolders.forEach((subfolder) => {
    const subfolderPath = path.join(dir, subfolder);
    generateIconsJson(subfolderPath); // Llamada recursiva para subcarpetas
  });
}

// Ejecutar la función inicial para la carpeta de íconos
generateIconsJson(iconFolder);
