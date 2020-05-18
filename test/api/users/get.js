const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../../app');
const mongoose = require('mongoose');

const {
    connect,
    close
} = require('../../../db/db');

describe('Testing GET /users route', function () {
    this.timeout(10000);

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

    it('Should get status 200 and success true', (done) => {
        request(app)
            .get('/users')
            .then((response) => {
                const body = response.body;
                expect(response).to.have.property('statusCode').equal(200);
                expect(body).to.have.property('success').equal(true);
                done()
            })
            .catch(e => {
                console.log(e)
                done(e)
            })
    })

    it('users should have property name and age', (done) => {
        request(app)
            .get('/users')
            .then(response => {
                const body = response.body;
                expect(body).to.have.property('users').to.be.an('Array');
                expect(body).to.have.property('users').to.be.an('Array').to.have.length.greaterThan(0);
                const users = response.body.users;
                expect(users).to.be.an('Array').to.deep.include({ age: 24, name: 'Diego' });
                done();
            })
            .catch(e => {
                console.log(e)
                done(e)
            })
    })
})