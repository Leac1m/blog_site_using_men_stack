const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator')


function notEmptyValidator (value) {
        return value !== ''
    }

const UserScheme = new Schema({
    username: {
        type: String,
        require: true,
        validate: [notEmptyValidator, '{PATH} is required'],
        unique: true
    },
    password: {
        type: String,
        require: true,
        validate: [notEmptyValidator, '{PATH} is required']
    }
})

UserScheme.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})
UserScheme.plugin(uniqueValidator)
const User = mongoose.model('User', UserScheme)
module.exports = User