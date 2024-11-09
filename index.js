const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const PORT = 3000

const homeController = require('./controllers/home.js')
const newPostController = require('./controllers/newPost.js')
const storePostController = require('./controllers/storePost.js')
const getPostController = require('./controllers/getPost.js')
const aboutController = require('./controllers/aboutPost.js')
const contactController = require('./controllers/contact.js')
const newUserController = require('./controllers/newUser.js')
const storeUserController = require('./controllers/storeUser.js')

const validateMiddleWare = require('./middleware/validateMiddleware.js')

const app = new express()
const ejs = require('ejs')


mongoose.connect('mongodb://localhost/my_database')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/posts/store', validateMiddleWare)


app.get('/', homeController)

app.get('/about', aboutController)

app.get('/contact', contactController)

app.get('/post/:id', getPostController)

app.get('/posts/new', newPostController)

app.post('/posts/store', storePostController)

app.get('/auth/register', newUserController)

app.post('/user/register', storeUserController)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

