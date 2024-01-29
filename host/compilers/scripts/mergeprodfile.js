var fs = require("fs");
var path = require("path");
var merge = require("merge-source-map");

console.log("Merging Prod file...");

function onFileContent(content, callback) {
  fs.appendFile(
    path.join(__dirname, "../../build/rxc.js"),
    "\n\n" + content + "\n\n",
    function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
      if (callback && typeof callback == "function") callback();
    }
  );
}

var mergedFilePath = path.join(__dirname, "../../build/rxc.js");
var mergedMapFilePath = path.join(__dirname, "../../build/rxc.js.map");

if (fs.existsSync(mergedFilePath)) {
  // Remove existing merged file
  fs.unlinkSync(mergedFilePath);
}

if (fs.existsSync(mergedMapFilePath)) {
  // Remove existing merged map file
  fs.unlinkSync(mergedMapFilePath);
}

fs.readFile(
  path.join(__dirname, "../../build/rxc_scripts.js"),
  "utf-8",
  function (err, content) {
    if (err) {
      console.error(err);
      return;
    }
    onFileContent(content, function () {
      fs.readFile(
        path.join(__dirname, "../../build/main.js"),
        "utf-8",
        function (err, content) {
          if (err) {
            console.error(err);
            return;
          }
          onFileContent(content, function () {
            /* var scriptsMap = fs.readFileSync(path.join(__dirname, "../../build/rxc_scripts.js.map"));
						var mainMap = fs.readFileSync(path.join(__dirname, "../../build/main.js.map"));

						var mergedMap = merge(JSON.parse(scriptsMap), JSON.parse(mainMap));

						fs.writeFileSync(path.join(__dirname, "../../build/rxc.js.map"), JSON.stringify(mergedMap)); */
          });
        }
      );
    });
  }
);
