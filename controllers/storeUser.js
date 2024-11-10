const User = require('../models/User.js')

module.exports = async (req, res) => {
    await User.create(req.body)
    .then(() =>  res.redirect('/'))
    .catch((err) => {
        console.log(err)
        return res.redirect('/auth/register')
    })

}