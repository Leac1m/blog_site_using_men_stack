const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const PORT = 3000

const BlogPost = require('./models/BlogPost.js')

const app = new express()
const ejs = require('ejs')


mongoose.connect('mongodb://localhost/my_database')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/post/new', (req, res) => {
    res.render('create')
})

app.post('/posts/store', (req, res) => {
    console.log(req.body)
    // blog = new BlogPost(req.body)
    res.redirect('/')
})
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

