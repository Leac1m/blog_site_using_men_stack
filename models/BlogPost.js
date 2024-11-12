const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Please enter a title']
    },
    body: {
        type: String,
        require: [true, "Body can't be empty"]
    },
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String
});
const BlogPost = mongoose.model('BlogPost', BlogPostSchema)
module.exports = BlogPost