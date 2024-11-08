const BlogPost = require('../models/BlogPost.js')

module.exports = async (req, res) => {
    let blogpost = {}
    try {
        blogpost = await BlogPost.findById(req.params.id)
        res.render('post', {
            blogpost
        })
    } catch {
        res.send().status(404)
    }
    
}