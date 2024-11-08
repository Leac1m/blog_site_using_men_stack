module.exports = (req, res, next) => {
    console.log('Custom middleware')
    if (req.files == null || req.body.title == null || req.body.title == null) {
        return res.redirect('/posts/new')
    }
    next()
}