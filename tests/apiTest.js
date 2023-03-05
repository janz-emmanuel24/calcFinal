// import { should as _should, use, request } from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../app.js';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// eslint-disable-next-line no-unused-vars
const should = chai.should();

chai.use(chaiHttp);

// eslint-disable-next-line no-unused-vars, no-var
// var should = _should();
// use(chaiHttp);
// use(should);
chai.use(chaiHttp);

// eslint-disable-next-line no-undef
describe('GET url objects', () => {
  // eslint-disable-next-line no-undef
  it('Should return a news object', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        // res.body.should.be.a('object');
        // res.body.length.should.be.eql(0);
        done();
      });
  });
});
