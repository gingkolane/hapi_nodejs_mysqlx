# hapi_nodejs_mysqlx
Connecting a hapi node.js server to MySQL8 database via X DevAPI


This is the accompany code for a blog post: 
https://gingkolane.medium.com/connecting-a-hapi-server-to-mysql8-database-via-x-devapi-b4f5dedfb6ca


To start the hapi server: 
$ npm install

connect to your local mysql database with a username and password. 

See server at 
$ localhost:3000

To use the hapi starter server working: 
$ node index.js

To connect to mysql database directly with getSession(), use index_session.js: 
$ node index_session.js


To connect to mysql database through a connection pool, use index_pool.js: 
$ node index_pool.js

