// import express and router
const express = require('express');
const router = express.Router();

//import other files.
const path = require('path');

//home routes
router.get('/', (req, res, next) => {
    res.render('index.ejs', {
        title: 'Home'
    });
});

// about routes
router.get('/about', (req, res, next) => {
    res.render('about.ejs', {
        title: 'About us'
    });
});

// contact routes
router.get('/contact', (req, res, next) => {
    res.render('contact.ejs', {
        title: 'contact us'
    });
});




module.exports = router