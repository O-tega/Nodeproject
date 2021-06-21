// import 
const express = require('express');
const path = require('path')

// File import
const {student, persons} = require('./data')

// initialize express
const app = express();

// set views directory
app.set('views', path.join(__dirname, 'views'))

// set static dir
app.use(express.static(path.join(__dirname, 'public')))


//using the sendfile method to send html file
// app.get('/', (req, res, next)=>{
//     res.status(200).sendFile(__dirname + '/views/index.html');
// });



// routes
// app.get('/', (req, res, next) => {
//     res.status(200).send('<h1>Hello world from express</h1>');
// });

// app.get('/about', (req, res, next)=>{
//     res.status(200).send('<h1>This is the about page</h1>')
// })

// app.get('/contact', (req, res, next)=>{
//     res.status(200).send('<h1>This is the contact page</h1>')
// })

// setting routes using the render method
app.get('/', (req, res, next)=>{
    res.status(200).render('index.ejs')
})
app.get('/about', (req, res, next)=>{
    res.status(200).render('about.ejs')
})
app.get('/contact', (req, res, next)=>{
    res.status(200).render('contact.ejs')
})

// api routes
app.get('/api/students', (req, res, next)=>{
    res.status(200).json({
        status: 'sucess',
        message: student,
    })
})

const PORT = process.env.port || 5000;

//listen to port
app.listen(PORT, () => {
    console.log(`server is running on http://127.0.0.1:${PORT}\nor http://localhost:${PORT}`)
})