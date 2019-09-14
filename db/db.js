const mongoose = require('mongoose');
const
const dbUser = 'workshop';
const dbPass = 'workshop2019';
const databaseUrl = `mongodb://${dbUser}:${dbPass}@ds031968.mlab.com:31968/mocha-workshop`;


const connect = () => {
    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV === 'test') {
            const Mockgoose = require('mockgoose').Mockgoose;
            const mockgoose = new Mockgoose(mongoose);

            mockgoose.prepareStorage()
                .then(() => {
                    mongoose.connect(databaseUrl, {
                        useCreateIndex: true,
                    }).then((res, err) => {
                        if (err) return reject(err);
                        resolve(res);
                    })
                })

        } else {
            mongoose.connect(databaseUrl, {
                useCreateIndex: true,
            }).then((res, err) => {
                if (err) return reject(err);
                resolve(res);
            })

        }
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