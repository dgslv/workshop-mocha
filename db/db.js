const mongoose = require('mongoose');

const dbUser = 'workshop';
const dbPass = 'workshop2019';
const databaseUrl = `mongodb://${dbUser}:${dbPass}@ds031968.mlab.com:31968/mocha-workshop`;


const connect = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, {
            useCreateIndex: true,
        }).then((res, err) => {
            if (err) return reject(err);
            resolve();
        })

    })
}

const close = () => {
    return mongoose.disconnect();
}
module.exports = {
    connect,
    close,
    dbUser,
    dbPass,
    databaseUrl
}