const { response } = require('express')
const express = require('express')

// Create the Express app
const app = express()

// Set static files - Public content will be available to the views
app.use(express.static('public'));


app.get('/', (request, response, next) => {

    response.sendFile(__dirname + '/views/home.html')
})

app.get('/about', (request, response, next) => {

    response.sendFile(__dirname + '/views/about.html')

})

app.get('/works', (request, response, next) => {

    response.sendFile(__dirname + '/views/works.html')

})

app.get('/gallery', (request, response, next) => {

    response.sendFile(__dirname + '/views/gallery.html')

})

app.listen(3000, () => console.log("Listening in port 3000"))