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
app.post('/posts', routes.posts.addPost)

//Read Posts
app.get('/posts', routes.posts.getPosts)

//Read Comments
app.get('/posts/:postId/comments', routes.comments.getComments)

//Add Comments
app.post('/posts/:postId/comments', routes.comments.addComment)

//Update Post
app.put('/posts/:postId', routes.posts.updatePost)

//Update Comments
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)

//Delete Post
app.delete('/posts/:postId', routes.posts.removePost)

//Delete Comment
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000)