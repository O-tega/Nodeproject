// import
const express = require('express');
const path = require('path')

// files import
const {students, persons} = require('./data')

// initialize express
const app = express();

// setting our views engine
app.set('view engine', 'ejs');

// static dir gotten from the code=====This enables us to render the ejs file
app.set('views', path.join(__dirname, 'views'))

// static dir gotten from the URL
app.use(express.static(path.join(__dirname, 'public')) )

// Routing
// We use app. get to route in express
// in order for us to use the render method effectively, we have to use the ejs
// this allows us to render the file sent instead of using send and sendFile
app.get('/', (req, res, next) =>{
    res.status(200).render('index.ejs');
});

app.get('/about', (req, res, next) =>{
    res.status(200).render('about.ejs');
});

app.get('/contact', (req, res, next) =>{
    res.status(200).render('contact.ejs');
});

app.get('/about-us', (req, res, next) =>{
    res.status(200).render('portfolio/about.ejs')
})
app.get('/experience', (req, res, next)=>{
    res.status(200).render('portfolio/experience.ejs')
})
app.get('/sign-up', (req, res, quest)=>{
    res.status(200).render('portfolio/signup.ejs')
})

// Routing APIs
app.get('/api/persons', (req, res, next) =>{
    res.status(200).json({
        status:'Success',
        message: persons
    })

app.get('/api/students', (req, res, next) =>{
    res.status(200).json({
        status: 'Success',
        message: students
    })
})
})

// setting the port
PORT = process.env.PORT || 5000;

// Listening to port 
app.listen(PORT, ()=>{
    console.log(`The server is running on http://127.0.0.1:${PORT} \nor http://localhost:${PORT} `)
})