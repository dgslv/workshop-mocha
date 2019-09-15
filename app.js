var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
const {
    connect,
    close
} = require('./db/db');

var app = express();
var http = require('http');

var port = process.env.PORT || '8000';
app.set('port', port);

var server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser())

connect()
    .then(() => {
        if (!module.parent) {

            console.log('DB Connection established with success! :-)');
            server.listen(port, () => {
                console.log('server is now running on port ' + port);
            })
        }
    });


app.use('/users', users);

app.use('/', (req, res) => {
    res.json({
        success: true,
        message: 'Tudo ok'
    })
})

module.exports = app;