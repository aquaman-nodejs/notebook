const fs = require('fs');
const path = require('path');
const oldPath = path.join(__dirname, '_book');
const newPath = path.join(__dirname, 'build');

function deleteFolder(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function (file, index) {
      var curPath = path + '/' + file;
      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        deleteFolder(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

if (fs.existsSync(newPath)) {
  deleteFolder(newPath);
}
fs.renameSync(oldPath, newPath);
