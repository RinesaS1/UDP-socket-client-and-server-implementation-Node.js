const fs = require("fs");
const path = require("path");
const { SHARED_FOLDER } = require("./config");

if (!fs.existsSync(SHARED_FOLDER)) {
  fs.mkdirSync(SHARED_FOLDER, { recursive: true });
}

function listFiles() {
  const files = fs.readdirSync(SHARED_FOLDER);
  return files.join("\n") || "(s ka asnjë file)";
}
