const expect = require('chai').expect;

const {
    connect,
    close
} = require('../../db/db');

const USER = '5d7aaa38ff27bfef1853921f';

describe('User service tests', function () {
    this.timeout(10000);

    this.beforeAll((done) => {
        connect()
            .then(() => done())
            .catch(e => done(e))
    });

    this.afterAll((done) => {
        close()
            .then(() => done())
            .catch(e => done(e))
    });

    it('should get users', (done) => {
        const {
            getUsers
        } = require('../../services/users');

        getUsers()
            .then((response) => {
                expect(response).to.be.an('Array').that.has.length.greaterThan(0);
                done()
            })
            .catch(e => done(e))
    })

    it('should get an user with object id 5d7aaa38ff27bfef1853921f', done => {
        const {
            getUser
        } = require('../../services/users');
        
        getUser(USER)
            .then((response) => {
                expect(response).to.have.own.property('name')
                expect(response).to.have.own.property('age')
                expect(response).to.have.own.property('name').equal('Diego')
                expect(response).to.have.own.property('age').equal(23)
                done()
            })
            .catch(e => done(e))
    })

    it('should not get user since user does not exist', done => {
        const {
            getUser
        } = require('../../services/users');

        getUser('sauhdaushads')
            .then((response) => {
                expect(response).to.be.null;
                done()
            })
            .catch(e => {
                expect(e).not.to.be.null;
                done(e)
            })
    })
})