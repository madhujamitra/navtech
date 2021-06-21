const express = require('express')
const bodyparser = require('body-parser')
const PORT = 3000
const api = require('../server/routers/api')
const app = express();

var cors = require('cors');


app.use(cors());

app.use(bodyparser.json())

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use('/api', api)
app.get('/', function (req, res) {
    res.send('hello from server')
})

app.listen(PORT, function () {
    console.log('server running on localhost:' + PORT)
})



