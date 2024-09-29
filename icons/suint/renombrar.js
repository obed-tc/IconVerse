const fs = require("fs");
const path = require("path");

// Define las rutas de las carpetas
let nombre = "SecurityWarnings";
const carpetaPrincipal = "./outline/" + nombre + "1"; // Cambia esto a tu ruta
const carpetaDestino = "./outline/" + nombre; // Cambia esto a tu ruta de destino

// Crea la carpeta de destino si no existe
if (!fs.existsSync(carpetaDestino)) {
  fs.mkdirSync(carpetaDestino, { recursive: true });
}

// Función para renombrar y mover los archivos SVG
const renombrarYMoverSVGs = (carpeta) => {
  const subcarpetas = fs.readdirSync(carpeta);

  subcarpetas.forEach((subcarpeta) => {
    const rutaSubcarpeta = path.join(carpeta, subcarpeta);

    // Verifica que sea un directorio
    if (fs.lstatSync(rutaSubcarpeta).isDirectory()) {
      const svgFile = path.join(rutaSubcarpeta, "Regular.svg");

      // Verifica si el archivo fill.svg existe
      if (fs.existsSync(svgFile)) {
        const nuevoNombre = `${subcarpeta}_outline.svg`;
        const destino = path.join(carpetaDestino, nuevoNombre);

        // Copia el archivo al destino
        fs.copyFileSync(svgFile, destino);
        console.log(`Copiado: ${svgFile} a ${destino}`);
      }
    }
  });
};

// Inicia el proceso
renombrarYMoverSVGs(carpetaPrincipal);
