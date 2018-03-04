const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//Create Post
app.post('/posts', (req, resp) => {
    routes.posts.addPost(req, resp)
})

//Read Posts
app.get('/posts', (req, resp) => {
    routes.posts.getPosts(req, resp)
})

//Read Comments
app.get('/posts/:postId/comments', (req, resp) => {
    routes.comments.getComments(req, resp)
})

//Add Comments
app.post('/posts/:postId/comments', (req, resp) => {
    routes.comments.addComment(req, resp)
})

//Update Post
app.put('/posts/:postId', (req, resp) => {
    routes.posts.updatePost(req, resp)
})

//Update Comments
app.put('/posts/:postId/comments/:commentId', (req, resp) => {
    routes.comments.updateComment(req, resp)
})

//Delete Post
app.delete('/posts/:postId', (req, resp) => {
    routes.posts.removePost(req, resp)
})

//Delete Comment
app.delete('/posts/:postId/comments/:commentId', (req, resp) => {
    routes.comments.removeComment(req, resp)
})

app.listen(3000)