const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')
const User = require('./models/User')

main().catch(err => console.log(err))
async function main() {
        await mongoose.connect('mongodb://localhost/my_database')
    
        // const blog = new
        // await BlogPost.create(
        //     {
        //         title: 'The One',
        //         body: 'Legends speaks of a one the esaped his cell, in the year 1980s. Well That is not the case. In fact this is not even real.'
        //     }
        // )
        
        // const id = '672cfa36757dbf4c16162639'

        // console.log(await BlogPost.findByIdAndUpdate(id, {
        //     title: 'Updated title'
        // }))
        console.log(await BlogPost.find())
        console.log(await User.find())
        await mongoose.disconnect()
}

// main()
