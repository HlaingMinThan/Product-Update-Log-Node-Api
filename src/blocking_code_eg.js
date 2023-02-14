async function read() {
    let fs = require('fs/promises');
    return fs.readFile(require('path').join(__dirname,'router.ts'),'utf8');
}

read().then(res => console.log(res)); // this code is non-blocking(better way) because of using async
console.log('hi there'); // this will run first