const express = require('express')
const path = require('path')

const app = express()

// use the express-static middleware
app.use(express.static(path.join(__dirname + '/YEBO')))

// define the first route
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/index.html'))
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));