/*const fs = require("fs");
const path = require("path");

module.exports = (on, config) => {
  on("task", {
    returnFiles(folderName) {
      return new Promise((resolve, reject) => {
        fs.readdir(folderName, (err, files) => {
          if (err) {
            return reject(err);
          }
          const containsNonCSVFiles =
            files && files.length
              ? files
                  .map((file) => path.extname(file))
                  .filter(extensions => extensions !== ".csv")
              : [];
          resolve(containsNonCSVFiles);
        });
      });
    },
  });
}; */

module.exports = function (on, config) {
  // configure plugins here
}

/*const text = fs.readFileSync(RegisterMedications.csv, 'utf8')
const csv = await neatCSV(text)
config.env.usersList = csv
return config
*/