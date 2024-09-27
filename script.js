const fs = require("fs");
const path = require("path");

// Ruta de la carpeta que contiene los iconos
const iconsDir = path.join(__dirname, "src/assets/icons");
const outputDir = path.join(iconsDir, "output"); // Carpeta de salida para los JSON

// Crear carpeta de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Función para obtener la lista de iconos SVG de forma recursiva
function getSvgIcons(dir) {
  let iconsList = [];

  // Leer el directorio actual
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Si es un directorio, hacer una llamada recursiva
    if (stat.isDirectory()) {
      const subIconList = getSvgIcons(filePath);
      // Si hay iconos en la subcarpeta, añadir un JSON para esa carpeta
      if (subIconList.length > 0) {
        const categoryJsonPath = path.join(outputDir, `${file}.json`);
        fs.writeFileSync(
          categoryJsonPath,
          JSON.stringify(subIconList, null, 2)
        );
        console.log(`Generated: ${categoryJsonPath}`);
      }
      iconsList = iconsList.concat(subIconList);
    } else if (path.extname(file) === ".svg") {
      // Si es un archivo SVG, añadirlo a la lista con ruta completa desde assets/icons/
      const relativePath = path.relative(
        path.join(__dirname, "src/assets/icons"),
        filePath
      );
      iconsList.push(`assets/icons/${relativePath.replace(/\\/g, "/")}`); // Asegurarse de que las barras sean '/'
    }
  });

  return iconsList;
}

// Función principal para generar los archivos JSON
function generateIconLists() {
  const mainDir = iconsDir; // Cambiado para incluir todo el directorio de iconos
  const allIconsList = getSvgIcons(mainDir);

  // Generar JSON con todos los iconos en 'icons'
  const allIconsJsonPath = path.join(outputDir, "all-icons.json");
  fs.writeFileSync(allIconsJsonPath, JSON.stringify(allIconsList, null, 2));
  console.log(`Generated: ${allIconsJsonPath}`);
}

// Ejecutar la función
generateIconLists();
