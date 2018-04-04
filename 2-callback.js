var fs = require("fs");

console.log('1.Block Thread:');
var data = fs.readFileSync("2-input.txt");

console.log("1." + data.toString());
console.log('1.Program End.');

console.log('2.Not Block Thread(File not exists):');
fs.readFile("NOT EXIST.txt", function (err, data) {
    if(err) return console.error("2." + err);
    console.log("2." + data.toString());
});
console.log('2.Program End.');

console.log('3.Not Block Thread:');
fs.readFile("2-input.txt", function (err, data) {
    if(err) return console.error("3." + err);
    console.log("3." + data.toString());
});
console.log('3.Program End.');