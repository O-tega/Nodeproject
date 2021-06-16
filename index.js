

// we call the exported data from the data.js in two ways

// // 1. giving it another variable name
// const data = require('./data')

// console.log("===============By variable Name=================")
// console.log(data)

// // 2. destructing the student and the person object
// console.log("===============By Destructing=================")
// const {student, person} = require('./data')

// console.log(student)
// console.log(person)

// Creating an http server
// ===============================================================================

const http = require('http');
const readFileToServer = require('./test')
const path = require('path')
const {student, person} = require('./data')


/**
 * this createServer method carries 2 parameters
 * 1.) the request object
 * 2.) the response object 
*/

const server = http.createServer((req, res)=>{
    if(req.url ==='/'){
        res.writeHead(200, {'content-type':'text/html'});
        const file = path.join(__dirname, 'public/index.html');
        const data = readFileToServer(file)
        res.write(data.file);
        res.end();
    }else if (req.url ==='/about'){
        res.writeHead(200, {'content-type':'text/html'});
        const about = path.join(__dirname, 'public/about.html')
        const aboutData = readFileToServer(about)
        res.write(aboutData.file);
        res.end();
    }else if(req.url ==='/contact'){
        res.writeHead(200, {'content-type':'text/html'});
        const contact = path.join(__dirname, 'public/contact.html')
        const contactData = readFileToServer(contact)
        res.write(contactData.file);
        res.end();
    }else if (req.url ==='/api/person'){
        res.writeHead(200, {'content-type':'application/json'});
        res.write(JSON.stringify(person));
        res.end();
    }else if (req.url ==='/api/student'){
        res.writeHead(200, {'content-type':'application/json'});
        res.write(JSON.stringify(student));
        res.end();
    }else{
        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>Error 404</h1>\n Invalid request');
        res.end();
    }
});

const PORT = 5500;

server.listen(PORT, () =>{
    console.log(
        `server is runningon http://localhost:${PORT} \nreload server to see new ;file changes `
    );
} )