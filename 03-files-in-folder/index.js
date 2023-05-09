const fs = require('fs');

const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      const name = path.parse(file.name).name;
      const type = path.parse(file.name).ext.slice(1);
      fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
        if (err) {
          console.log(err);
        } else if (stats.isFile()) {
          const size = `${stats.size}b`;
          console.log(name + ' - ' + type + ' - ' + size);
        }
      });
    });
  }
});