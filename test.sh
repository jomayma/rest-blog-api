#posts post data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts" 

#posts post data with comments
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": "", "comments":["I think youre undervaluing the benefit of let and const."]}'  "http://localhost:3000/posts"

#get comments
curl "http://localhost:3000/posts/1/comments"

#updates post data at specific id
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"

#gets post data
curl "http://localhost:3000/posts" 

#deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/0"

#gets comments from specific post id
curl "http://localhost:3000/posts/0/comments"
