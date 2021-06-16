const fs = require('fs')

// console.log(__dirname)
// console.log(__filename)
// ========Read in Hexadecimal============
const data = fs.readFileSync('./text.txt')
console.log(data)

// ===========Read in utf-8================
const data2 = fs.readFileSync('./text.txt', 'utf-8')
console.log(data2)

 

const htmlFile = fs.readFileSync('./public/index.html', 'utf-8')
console.log(htmlFile)


// Creating a documentation
/**
 * @description this helper function reads a file from our directory and returns an object
 * @param {string} pathToFile 
 * @returns {object} return file object and utility data
 */

function readFileToServer (pathToFile){
    let data = fs.readFileSync(pathToFile, 'utf-8')
    return {
        file: data,
    }
    
}

module.exports = readFileToServer;