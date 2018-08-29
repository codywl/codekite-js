// faker and/or chance data => json-server
// This file is run before json-server starts to provide randomized data
// for each session, which helps to catch edge-cases.
const jsf = require("json-schema-faker");
const fs = require("fs");
const path = require("path");
const mockDataSchema = require("./mockDataSchema");

// Newer versions of `json-schema-faker` do not contain the 'faker' and
// 'chance' generators by default, so you must enable them.
jsf.extend("faker", function() {
  return require("faker");
});

const json = JSON.stringify(jsf(mockDataSchema));
const filePath = path.resolve(__dirname, "db.json");

// Truncate file and append new data.
fs.truncate(filePath, 0, function() {
  fs.writeFile(filePath, json, function(err) {
    if (err) {
      return console.log(err); // eslint-disable-line no-console
    } else {
      console.log("Mock data generated."); // eslint-disable-line no-console
    }
  });
});
