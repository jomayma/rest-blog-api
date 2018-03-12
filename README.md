# edX - Microsoft: DEV283x
## Introduction to Node.js
[About EdX course](https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2017/course/)

### Module 2 Assignment Lab: RESTful Blog API

Simple Express application, to handle Blog Posts and Comments, which has the following REST API endpoints:
*  GET and POST /posts
*  PUT and DELETE /posts/:postId/
*  GET and POST /posts/:postId/comments
*  PUT and DELETE /posts/:postId/comments/:commentId

Use an in-memory store with the structure similar to this:
```javascript
let store = {
  posts: [
    {name: 'Top 10 ES6 Features every Web Developer must know',
    url: 'https://webapplog.com/es6',
    text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
    comments: [
      text: 'Cruel…..var { house, mouse} = No type optimization at all',
      text: 'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
      text: '(p1,p2)=>{ … } ,i understand this ,thank you !'      
    ]
    }
  ]
}
```
### HOW MAKE A LOCAL INSTALLATION
```sh
$ git clone https://github.com/jomayma/rest-blog-api.git
$ cd rest-blog-api
$ npm install
$ npm start
```

To implement the code I have used: **errorhandler, express, express-validator, morgan**

