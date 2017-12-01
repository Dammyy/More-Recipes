import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test API', () => {
  describe('GET /', () => {
    // Test for index route
    it('Should return 200', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
    // Test for undefined route
    it('Undefined routes should Return 404', (done) => {
      chai.request(app)
        .post('/another/undefined/route')
        .send({ random: 'random' })
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
