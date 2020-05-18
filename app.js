var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const {
    connect,
    close
} = require('./db/db');

const app = express();
const http = require('http');

const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

connect()
    .then(() => {
        if (!module.parent) {
            console.log('DB Connection established with success! :-)');
            server.listen(port, () => {
                console.log('server is now running on port ' + port);
            })


        }
    })

const users = require('./routes/users');
app.use('/users', users);

module.exports = app;