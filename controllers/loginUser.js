const bcrypt = require('bcrypt')
const User = require('../models/User')



module.exports = async (req, res) => {
    const flash_setup = (validationErrors) =>
        {
            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
        }

    const { username, password } = req.body;

    if (!username) {
        flash_setup(['Enter your username'])
        return res.redirect('/auth/login')
    }

    if (!password) {
        flash_setup(['Enter your password'])
        return res.redirect('/auth/login')
    }

    await User.findOne({ username: username})
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (error) {
                    flash_setup(['Enter your password'])
                    res.redirect('/auth/login')
                }
                else if (same) {
                    req.session.userId = user._id
                    flash_setup(['login successful'])
                    res.redirect('/')
                }
                else {
                    flash_setup(['incorrect password'])
                    res.redirect('/auth/login')
                }

            })
            return
        }
        flash_setup(['user not found'])
        return res.redirect('/auth/login')
    })
    .catch((error) => {
        flash_setup(['something broke'])
        console.log('something broke', error)
        return res.redirect('/auth/login')
    })
    
    
}