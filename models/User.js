const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserScheme = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

UserScheme.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User', UserScheme)
module.exports = User