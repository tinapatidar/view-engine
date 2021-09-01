const express = require('express')
const path = require('path')
const app = express()

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){

	// Rendering our web page i.e. Demo.ejs
	// and passing title variable through it
	res.render('Demo', {
		title: 'View Engine Demo'
	})
})

app.listen(8080, function(error){
	if(error) throw error
	console.log("Server created Successfully")
})
