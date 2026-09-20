const fs = require("fs");
const path = require("path");

const files = ["index.html", "style.css", "script.js"];
const dist = path.join(__dirname, "dist");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist);

for (const file of files) {
  fs.copyFileSync(file, path.join(dist, file));
}

console.log("Build completed successfully.");