const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = async (req, res) => {
    const { username, password } = req.body;

    await User.findOne({ username: username})
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (!same) {
                    console.log('incorrect password')
                    res.redirect('/auth/login')
                    return
                }

                // store user session
                console.log('login successful')
                res.redirect('/')

            })
            return
        }
        console.log('user not found')
        return res.redirect('/auth/login')
    })
    .catch((error) => {
        console.log('something broke', error)
        return res.redirect('/auth/login')
    })
    
    
}