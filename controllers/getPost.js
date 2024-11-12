const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res, next) => {
    let blogpost = {}
    try {
        blogpost = await BlogPost.findById(req.params.id).populate('userid')
        res.render('post', {
            blogpost
        })
    } catch {
        console.log('unknown url')
        next()
    }
    
}