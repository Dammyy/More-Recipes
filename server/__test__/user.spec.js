import chaiHttp from 'chai-http';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import chai from 'chai';
import supertest from 'supertest';
import app from '../app';
import models from '../models';
import config from '../../config';

const request = supertest.agent(app);

const UserModel = models.users;
const testUser = {};
const { expect } = chai;
chai.use(chaiHttp);
describe('User controller', () => {
  // Empty database tables
  before(async () => {
    await models.sequelize.sync();
    await UserModel.destroy({ where: {} });
    await UserModel.create({
      firstName: 'Damilare',
      lastName: 'Olatubosun',
      email: 'damilare@yahoo.com',
      hashPassword: bcrypt.hashSync('password', 10),
    });
    testUser.user1 = await UserModel.create({
      firstName: 'Damilare',
      lastName: 'Olatubosun',
      email: 'damilareolatubosun@gmail.com',
      hashPassword: bcrypt.hashSync('password2', 10),
    });
    testUser.user1.auth2 = jwt.sign(
      {
        id: testUser.user1.id,
        firstName: testUser.user1.firstName,
        lastName: testUser.user1.lastName,
        email: testUser.user1.email
      }, config.JWT_SECRET,
      { expiresIn: 60 * 60 }
    );
  });
  describe('User Sign up', () => {
    // Test Sign up - email not provided
    it('should return email is required if no email is provided', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: '',
          password: 'password',
          password2: 'password',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Email is required');
          done();
        });
    });
    // Test Sign up - email not valid
    it('should return email invalid if invalid email is provided', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun',
          password: 'password',
          password2: 'password',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Email Invalid');
          done();
        });
    });
    // Test Sign up - non letters characters provided as first name
    it('should return Only alphabets allowed in first name', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare5',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password',
          password2: 'password',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message)
            .to.equal('Only alphabets allowed in first name');
          done();
        });
    });
    // Test Sign up - non letters characters provided as last name
    it('should return Only alphabets allowed in last name', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun5',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password',
          password2: 'password',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message)
            .to.equal('Only alphabets allowed in last name');
          done();
        });
    });
    // Test Sign up - user trying to register with an exisiting email
    it('should return Email Already Exists', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: 'damilare@yahoo.com',
          password: 'password',
          password2: 'password',
        })
        .end((err, res) => {
          expect(res).to.have.status(409);
          expect(res.body.message).to.equal('Email Already Exists');
          done();
        });
    });
    // Test Sign up - password not provided
    it('should return password is required', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun@yahoo.com',
          password: '',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Password is required');
          done();
        });
    });
    // Test Sign up - first name not provided
    it('should return first name is required', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: '',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password',
          password2: 'password',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('First name is required');
          done();
        });
    });
    // Test Sign up - last name not provided
    it('should return last name is required', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: '',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password',
          password2: 'password',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Last name is required');
          done();
        });
    });
    // Test Sign up - suopplied passwords do not match
    it('should return passwords do not match', (done) => {
      request
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password',
          password2: 'passwor',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Passwords do not match');
          done();
        });
    });
  });

  // Test Sign in
  it('Should sign in a user', (done) => {
    request
      .post('/api/v1/users/signup')
      .send({
        firstName: 'Damilare',
        lastName: 'Olatubosun',
        email: 'damilareolatubosun@yahoo.com',
        password: 'password',
        password2: 'password',
      })
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal('Registration Successful');
        request
          .post('/api/v1/users/signin')
          .send({
            email: 'damilareolatubosun@yahoo.com',
            password: 'password'
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal('Login Successful');
            done();
          });
      });
  });
  // Test Sign in - user not existing
  describe('Sign in test', () => {
    it('should return user not found if email does not exist', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({ email: 'email@noUser.com', password: 'no_password' })
        .end((err, res) => {
          if (!err) {
            expect(res).to.have.status(404);
            expect(res.body.message).to.equal('User Not Found');
            done();
          }
        });
    });
    // Test Sign in - email not valid
    it('should return email inavlid if email entered is invalid', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({ email: 'email@noUser', password: 'no_password' })
        .end((err, res) => {
          if (!err) {
            expect(res).to.have.status(400);
            expect(res.body.message).to.equal('Email Invalid');
            done();
          }
        });
    });
    // Test Sign in - password dont match
    it('should return invalid password if password does not match', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'no_password'
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.message).to.equal('Invalid Password');
          done();
        });
    });
    // Test Sign in - password not provided
    it('should return password is required', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({ email: 'damilareolatubosun@yahoo.com', password: '' })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Password is required');
          done();
        });
    });
    // Test Sign in - email not provided
    it('should return email is required if no email is provided', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({ email: '', password: 'password' })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Email is required');
          done();
        });
    });
    it('should return a users details', (done) => {
      request
        .get(`/api/v1/users/profile/${testUser.id}`)
        .set('auth', testUser.user1.auth2)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
