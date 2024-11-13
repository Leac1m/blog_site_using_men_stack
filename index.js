const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const flash = require('connect-flash')


const homeController = require('./controllers/home.js')
const newPostController = require('./controllers/newPost.js')
const storePostController = require('./controllers/storePost.js')
const getPostController = require('./controllers/getPost.js')
const aboutController = require('./controllers/aboutPost.js')
const contactController = require('./controllers/contact.js')
const newUserController = require('./controllers/newUser.js')
const storeUserController = require('./controllers/storeUser.js')
const loginController = require('./controllers/login.js')
const loginUserController = require('./controllers/loginUser.js')
const logoutController = require('./controllers/logout')

const validateMiddleWare = require('./middleware/validateMiddleware.js')
const authMiddleWare = require('./middleware/authMiddleware.js')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware.js')

const app = new express()
const ejs = require('ejs')
const authMiddleware = require('./middleware/authMiddleware.js')

const PORT = 3000
const db = process.env.DATABASE_URL ?? 'mongodb://localhost/my_database'
// mongoose.connect('mongodb://localhost/my_database')
mongoose.connect(db)
global.loggedIn = null

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(fileUpload())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSession({ secret: 'keyboard cat'}))
app.use(flash())

app.use('/posts/store', validateMiddleWare)
app.use('*', (req, res, next) => {
    loggedIn = req.session.userId
    next()
})


app.get('/', homeController)

app.get('/about', aboutController)

app.get('/contact', contactController)

app.get('/post/:id', getPostController)

app.get('/posts/new', authMiddleWare, newPostController)

app.post('/posts/store', authMiddleware, storePostController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)

app.post('/user/register', redirectIfAuthenticatedMiddleware, storeUserController)

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)

app.post('/user/login', redirectIfAuthenticatedMiddleware, loginUserController)

app.get('/auth/logout', logoutController)

app.use((req, res) => res.render('notfound'))

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

