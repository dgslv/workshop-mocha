const expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../../app');
const {    
    connect,
    close
} = require('../../../db/db');

describe('Testing get user', () => {
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

    it('Gets a user with an id passed', (done) => {
        const _id = '5d7aaa38ff27bfef1853921f';
        request(app).get('/users/' + _id)
            .send()
            .then((res) => {
                const body = res.body.user;
                expect(body).to.have.deep.members([{
                    __v: 0,
                    _id: body[0]._id,
                    name: 'Diego',
                    age: 23
                }])
                done();
            })
            .catch(e => {
                done(e)
            })
    })

    it('Get users', (done) => {
        request(app).get('/users')
            .send()
            .then((res) => {
                expect(res.body.data).to.be.a('array')
                done();
            })
            .catch(e => {
                done(e)
            })
    })
})