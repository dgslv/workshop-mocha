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
    beforeEach(function (done) {
        this.enableTimeouts(false);
        connect()
            .then(() => done())
            .catch((err) => done(err));
    })
    afterEach((done) => {
        mongoose.models = {};
        mongoose.modelSchemas = {};
        close()
            .then(() => done())
            .catch((err) => done(err));
    })

    it('Posts a user called Diego with age 24', (done) => {
        request(app)
            .post('/users')
            .send({
                name: 'Diego',
                age: 24
            })
            .then((response) => {
                expect(response).to.have.property('statusCode').equal(200);
                const body = response.body;
                expect(body).to.have.own.property('success').equal(true);
                done();
            })
            .catch(e => {
                done(e);
            })
    })
})