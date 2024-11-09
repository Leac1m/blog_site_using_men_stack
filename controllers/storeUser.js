const User = require('../models/User.js')

module.exports = async (req, res) => {
    await User.create(req.body)
        res.redirect('/')
}