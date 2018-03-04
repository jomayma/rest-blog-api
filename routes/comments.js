module.exports = {
    getComments(req, resp) {
      console.log(`getComments called from server, with id ${req.params.postId}...`)
      resp.status(200).send(store.posts[req.params.postId].comments)
    }, 
    addComment(req, resp) {
      let newComment = req.body
      let postId = req.params.postId
      console.log(`newComment ${newComment}`)
      let commentId
      if (store.posts[postId].comments){
        commentId = store.posts[postId].comments.length
      } else {
        commentId = 0
        store.posts[postId].comments = []
      }
      store.posts[postId].comments[commentId]=newComment[0]
      console.log(`commentId ${commentId}`)
      resp.status(200).send({commentId: commentId})
    },
    //PUT and DELETE /posts/:postId/comments/:commentId
    updateComment(req, resp) {
      let newComment = req.body
      let postId = req.params.postId
      let commentId = req.params.commentId
      console.log(`newComment ${newComment}`)
      if (!store.posts[postId].comments || (store.posts[postId].comments.length < commentId)){
        return resp.send({
          error: 'Please enter a valid comment Id.'
        })
      } else {
        store.posts[postId].comments[commentId] = newComment[0]
      }
      console.log(`commentId ${commentId}`)
      resp.status(200).send({commentId: commentId})
    },
    removeComment(req, resp) {
      let postId = req.params.postId
      let commentId = req.params.commentId
      if (!store.posts[postId].comments || (store.posts[postId].comments.length < commentId)){
        return resp.send({
          error: 'Please enter a valid comment Id.'
        })
      } else {
        store.posts[postId].comments.splice(commentId, 1)
      }
      resp.status(204).send()
    }  
  }