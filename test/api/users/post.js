const expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../../app');
const {
    dbPass,
    dbUser,
    databaseUrl,
    connect,
    close
} = require('../../../db/db');

describe('Testing post user', () => {
    before(function (done) {
        this.enableTimeouts(false)
        connect()
            .then(() => done())
            .catch((err) => done(err));
    })
    after((done) => {
        mongoose.models = {};
        mongoose.modelSchemas = {};
        close()
            .then(() => done())
            .catch((err) => done(err));
    })

    it('Posts a user called Diego with age 23', (done) => {
        request(app).post('/users')
            .send({
                name: 'Diego',
                age: 23
            })
            .then((res) => {
                const body = res.body.data;
                expect(body).to.contain.property('_id');
                expect(body).to.contain.property('name');
                expect(body).to.contain.property('age');
                done();
            })
            .catch(e => {
                done(e);
            })
    })
})