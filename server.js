const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { checkSchema , validationResult } = require('express-validator/check')

let app = express()

let objSchema = {
    url: {
      in: ['body'],
      optional: true,
      isLength: {
        options: {min: 12},
        errorMessage: "Url must be at least 12 characters"
      },
      matches: {
        options: ["http.*", "g"],
        errorMessage: "URL is malformed."
      },
      errorMessage: "Invalid URL"
    },
    postId: {
      in: ['params'],
      optional: true,
      errorMessage: 'ID is wrong',
      isInt: true,
      toInt: true
    },
    commentId: {
        in: ['params'],
        optional: true,
        errorMessage: 'COMMENT ID is wrong',
        isInt: true,
        toInt: true
    }
  }

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.use(checkSchema(objSchema), function(req, resp, next){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(422).json({ errors: errors.mapped() });
    }
    next()
})

//Create Post
app.post('/posts',(req, resp) => {
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