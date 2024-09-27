const fs = require("fs");
const path = require("path");

const iconFolder = path.join(__dirname, "icons");
const outputFolder = path.join(__dirname, "output");
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

function getAllSvgFiles(dir) {
  const results = [];

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results.push(...getAllSvgFiles(filePath));
    } else if (file.endsWith(".svg")) {
      const relativePath = path
        .relative(__dirname, filePath)
        .replace(/\\/g, "/"); // Cambia \\ por /
      results.push({
        name: file.split(".")[0],
        url: `https://raw.githubusercontent.com/obed-tc/IconVerse/4ab9d936a0d1a40b7b66e5ccc2c4ea088ac10dc8/${relativePath}`,

        // url: `${relativePath}`,
      });
    }
  });

  return results;
}

function generateIconsJson(dir) {
  const icons = getAllSvgFiles(dir);

  if (icons.length > 0) {
    const folderName = path.basename(dir);
    const outputFile = path.join(outputFolder, `${folderName}.json`);
    fs.writeFileSync(outputFile, JSON.stringify(icons, null, 2));
    console.log(`JSON de íconos en ${folderName} generado en ${outputFile}`);
  }

  const subfolders = fs.readdirSync(dir).filter((file) => {
    const filePath = path.join(dir, file);
    return fs.statSync(filePath).isDirectory();
  });

  subfolders.forEach((subfolder) => {
    const subfolderPath = path.join(dir, subfolder);
    generateIconsJson(subfolderPath);
  });
}

generateIconsJson(iconFolder);
