const path = require('path');
const fs = require('fs');

// console.log("========READ FILE=========\n")
// const data = fs.readFileSync(path.join(__dirname, "text.txt"), "utf-8");
// console.log(data);


// console.log("========WRITE FILE=========\n")
// const writeFile = fs.writeFileSync(path.join(__dirname, 'new.txt'), data)
// console.log(data)

console.log("=====READ DATA=======");

console.log("=====READ FILE=======");

fs.readFile(path.join(__dirname, 'text.txt'), 'utf-8', (err, data) =>{
    if (err) {
        throw new Error(err);
    }
    console.log(data);

    fs.writeFile('./new2.txt', data, (err, data2)=> {
        if (err) {
            throw new Error(err);
        }
        console.log(data2);
        console.log('====Done====');

        fs.readFile('./new2.txt', 'utf-8', (err, data3)=>{
            if (err) {
                throw new Error(err);
            }
            console.log(data3);
            console.log('===== READ NEW FILE');
        }); 
    });
});

console.log('=====CODE EXITED========')
