const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

main().catch(err => console.log(err))
async function main() {
    // try {
        await mongoose.connect('mongodb://localhost/my_database')
    
        const blog = new BlogPost(
            {
                title: 'The One Who Got Away',
                body: 'Legends speaks of a one the esaped his cell, in the year 1980s. Well That is not the case. In fact this is not even real.'
            }
        )
        
        const id = '672cfa36757dbf4c16162639'

        console.log(await BlogPost.findByIdAndUpdate(id, {
            title: 'Updated title'
        }))
        console.log(await BlogPost.findById(id))
        await mongoose.disconnect()
    // } catch (error) {
    //    console.log(error)
    // }
    // try {
    //     await BlogPost.create({
    //         title: 'The One Who Got Away',
    //         body: 'Legends speaks of a one the esaped his cell, in the year 1980s. Well That is not the case. In fact this is not even real.'
    //     })
    
    // } catch (error) {
    //     console.log(error)
    // }
}

// main()
