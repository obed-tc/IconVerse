const fs = require("fs");
const path = require("path");

// Función para limpiar atributos no deseados de un SVG
const limpiarSVG = (contenido) => {
  return contenido
    .replace(/ width="[^"]*"/g, "") // Eliminar atributo width
    .replace(/ height="[^"]*"/g, "") // Eliminar atributo height
    .replace(/ fill="[^"]*"/g, "") // Eliminar atributo fill
    .replace(/ stroke="[^"]*"/g, ""); // Eliminar atributo stroke
};

// Función recursiva para procesar todos los archivos SVG en directorios y subdirectorios
const procesarDirectoriosRecursivamente = (directorio) => {
  fs.readdir(directorio, (err, archivos) => {
    if (err) {
      console.error(`Error leyendo el directorio: ${err}`);
      return;
    }

    archivos.forEach((archivo) => {
      const rutaArchivo = path.join(directorio, archivo);

      fs.stat(rutaArchivo, (err, stats) => {
        if (err) {
          console.error(`Error obteniendo información del archivo: ${err}`);
          return;
        }

        // Si es un directorio, procesarlo recursivamente
        if (stats.isDirectory()) {
          procesarDirectoriosRecursivamente(rutaArchivo);
        }

        // Si es un archivo SVG, proceder con la limpieza
        else if (path.extname(archivo) === ".svg") {
          fs.readFile(rutaArchivo, "utf-8", (err, contenido) => {
            if (err) {
              console.error(`Error leyendo el archivo ${archivo}: ${err}`);
              return;
            }

            // Limpiar el contenido del SVG
            const contenidoLimpio = limpiarSVG(contenido);

            // Escribir el archivo limpio
            fs.writeFile(rutaArchivo, contenidoLimpio, "utf-8", (err) => {
              if (err) {
                console.error(
                  `Error escribiendo el archivo ${archivo}: ${err}`
                );
              } else {
                console.log(`Archivo limpio: ${rutaArchivo}`);
              }
            });
          });
        }
      });
    });
  });
};

// Cambia esta ruta al directorio donde están tus archivos SVG y subcarpetas
const directorioSVG = "../suint"; // Asegúrate de que exista este directorio
procesarDirectoriosRecursivamente(directorioSVG);
