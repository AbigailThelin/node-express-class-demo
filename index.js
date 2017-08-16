const express = require('express'),
    app = express(),
    port = 3000,
    data = require('./data.js'),
    bodyParser = require('body-parser');
    bc= require('./book_controller.js')


// ========== Top - level middleware =========//

app.use(bodyParser.json());




// ================ endpoints ===============//
// CRUD = rest
//-create ======= post
//-read ======= get
//- update ======= put
//- delete ======= delete

// axios.get('api/mydata').then()
// app.get('api/mydata')           METHODS NEED TO MATCH

// app.METHOD(URL, HANDLER);
// -Method ---- get, put, post, delete
// -URL ---- endpoint url ex: '/api/mydata'
// -Handler --- callback function that fires whend endpoint is hit


app.get('/api/getBooks', bc.get)

app.post('/api/addBook', bc.post)


app.put('/api/updateBook/:index/:name', bc.put)

app.delete('.api/deleteIt/:index', bc.delete)


//ports - 3000-12000
app.listen(port, () => console.log(`listening on port ${port}`))