const fs = require("fs");
const path = require("path");

// Define source directories
const srcDir = path.join(__dirname, "src"); // Source for HTML, CSS, and JS files
const imgDir = path.join(__dirname, "img"); // Source for images
const distDir = path.join(__dirname, "dist"); // Destination directory

// Define valid extensions (images, HTML, CSS, JS)
const fileExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".svg",
  ".webp",
  ".html",
  ".css",
  ".js",
];

// Function to copy files based on extensions
function copyFiles(src, dest) {
  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    // Check if it's a directory and recursively copy files if true
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyFiles(srcPath, destPath); // Recursively copy nested directories
    } else {
      // Only copy files with specified extensions
      const ext = path.extname(file).toLowerCase();
      if (fileExtensions.includes(ext)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${srcPath} -> ${destPath}`);
      }
    }
  });
}

// Clean the dist directory before copying
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true }); // Clean 'dist' folder
}

// Create destination directory if it doesn't exist
fs.mkdirSync(distDir, { recursive: true });

// Copy HTML, CSS, JS from 'src' to 'dist'
copyFiles(srcDir, distDir);

// Copy images from 'img' to 'dist/img'
const distImgDir = path.join(distDir, "img");
fs.mkdirSync(distImgDir, { recursive: true });
copyFiles(imgDir, distImgDir);
