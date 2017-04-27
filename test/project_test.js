// Set ENV to testing
process.env.NODE_ENV = 'test';

let mongoose = require('mongoose');
let Driver = require('../api/models/WIMDModel')
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();

chai.use(chaiHttp);

describe('/GET drivers', () => {
    it('it should GET all the available drivers around 500m', done => {
        chai.request(server)
            .get('/drivers')
            .end((err, res) => {
                res.status.should.be.equal(200);
                res.body.should.be.a('array');
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('latitude');
                res.body[0].should.have.property('longitude');
                res.body[0].should.have.property('driver_id');
                res.body[0].should.have.property('accuracy');
                done();
            });
    });
});

describe('/POST drivers/location', () => {
    it('it should not POST without lat and lon', (done) => {
        let driver = {
            latitude: "",
            longitude: "",
            accuracy: "0.5",
            driver_id: "3000"
        }
        chai.request(server)
            .put('/drivers/location')
            .send(driver)
            .end((err, res) => {
                res.status.should.be.equal(400);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.should.have.property('error');
                done();
            })
    })
});

describe('/POST drivers/location', () => {
    it('it should not POST with wrong lat and lon', (done) => {
        let driver = {
            latitude: "-91",
            longitude: "123.456",
            accuracy: "0.7",
            driver_id: "3000"
        }
        chai.request(server)
            .put('/drivers/location')
            .send(driver)
            .end((err, res) => {
                res.status.should.be.equal(422);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                res.should.have.property('error');
                done();
            })
    })
});

describe('/POST drivers/location', () => {
    it('it should POST a record', (done) => {
        let driver = {
            latitude: "+90.0",
            longitude: "-127.554334",
            accuracy: "0.9",
            driver_id: "6000"
        }
        chai.request(server)
            .put('/drivers/location')
            .send(driver)
            .end((err, res) => {
                res.status.should.be.equal(200);
                res.should.have.header('content-type', 'application/json; charset=utf-8');
                done();
            })
    })
});