//console.log(__filename);
//console.log(__dirname);
/*
var t1 = setTimeout(function() {
    console.log('2s.');
}, 2000);
var t2 = setTimeout(function() {
    console.log('1s.');
}, 1000);
clearTimeout(t2);

setInterval(function() {
    console.log('3s.');
}, 3000);
*/
/*
console.info('Program Started');
console.time('t1');
console.log("1+1=%d");
console.log("1+1=%d", 2);

console.error('error');
console.trace();
console.timeEnd('t1');
*/
//process.stdout.write('123');
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});
console.log(process.execPath);
console.log(process.platform);

console.log(process.cwd());
console.log(process.version);
console.log(process.memoryUsage());