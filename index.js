// import 
const express = require('express');
const path = require('path')

// File import
const {student, persons} = require('./data')

//route imports
const phoneRoutes = require('./routes/phones.routes');
const homeRoutes = require('./routes/home.routes');

// initialize express
const app = express();

// set views directory
app.set('views', path.join(__dirname, 'views'))

// set static dir
app.use(express.static(path.join(__dirname, 'public')))

//setting up request moddleware----------used to send data from front end to the server
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//globals
app.use((req, res, next)=>{
    req.server_url = 'http://localhost:5000/';
    next();
})

//home routes
app.use('/', homeRoutes);

//phone routes
app.use('/phones', phoneRoutes);


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