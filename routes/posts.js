/*
//Use an in-memory store with the structure similar to this:
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
*/
store = {}
store.posts = []

module.exports = {
    getPosts(req, resp) {
      console.log('from getPosts...')
      resp.status(200).send(store.posts)
    },
    addPost(req, resp) {
      let newPost = req.body
      let postId = store.posts.length
      store.posts.push(newPost)
      resp.status(201).send({postId: postId})
    },
    updatePost(req, resp) {
      console.log('from updatePost...')
      store.posts[req.params.postId] = req.body
      resp.status(200).send(store.posts[req.params.postId])
    },
    removePost(req, resp) {
      store.posts.splice(req.params.postId, 1)
      resp.status(204).send()
    }
  }
