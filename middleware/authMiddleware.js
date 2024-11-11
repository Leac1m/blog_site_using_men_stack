const User = require('../models/User')

module.exports = (req, res, next) => {
    try
    {
        const user = User.findById(req.session.userId)
        if (!user) res.redirect('/')
    }
    catch (error)
    {
        res.redirect('/')
    }

    next()
}