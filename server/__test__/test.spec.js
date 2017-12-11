// /*eslint-disable*/
import chaiHttp from 'chai-http';
import chai from 'chai';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import app from '../app';
import models from '../models';
import config from '../../config';

const UserModel = models.users;
const RecipeModel = models.recipes;
const ReviewModel = models.reviews;

const { expect } = chai;
let auth = '';
chai.use(chaiHttp);
const testUser = {};

describe('Test API', () => {
  describe('GET /', () => {
    // Empty database tables
    before(async () => {
      await UserModel.destroy({ where: {}});
      await RecipeModel.destroy({ where: {}});
      await ReviewModel.destroy({ where: {}});
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
      testUser.recipe1 = await RecipeModel.create({
        title: 'Amala and Efo',
        details: 'Black swallow food.',
        ingredients: 'Yam flour and hot water',
        userId: testUser.user1.id
      });
      testUser.recipe2 = await RecipeModel.create({
        title: 'Rice and beans',
        details: 'boil for one hour.',
        ingredients: 'rice and water',
        userId: testUser.user1.id
      });
    });
    // Test Sign in
    it('Should sign in a user', (done) => {
      chai.request(app)
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('Registration Successful');
          chai.request(app)
            .post('/api/v1/users/signin')
            .send({
              email: 'damilareolatubosun@yahoo.com',
              password: 'password'
            })
            .end((err, res) => {
              expect(res).to.have.status(200);
              expect(res.body.jwt).to.not.be.undefined;
              done();
            });
        });
    });
    // Test Sign in - email not existing
    it('should return user not found if email does not exist', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({ email: 'email@noUser.com' , password: 'no_password'})
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('User Not Found');
          done();
        });
    });
    // Test Sign in - password dont match
    it('should return invalid password if password does not match', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({ email: 'damilareolatubosun@yahoo.com', password: 'no_password'})
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(401);
          expect(res.body.message).to.equal('Invalid Password');
          done();
        });
    });
    // Test Sign in - password not provided
    it('should return password is required if no password is provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({ email: 'damilareolatubosun@yahoo.com', password: ''})
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Password is required');
          done();
        });
    });
    // Test Sign in - email not provided
    it('should return email is required if no email is provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({ email: '', password: 'password'})
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Email is required');
          done();
        });
    });
    // Test Sign up - email not provided
    it('should return email is required if no email is provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: '',
          password: 'password',
        })
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Email is required');
          done();
        });
    });
    // Test Sign up - password not provided
    it('should return password is required if no password is provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun@yahoo.com',
          password: '',
        })
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Password is required');
          done();
        });
    });
    // Test Sign up - first name not provided
    it('should return first name is required if no first name is provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signup')
        .send({
          firstName: '',
          lastName: 'Olatubosun',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password',
        })
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('First name is required');
          done();
        });
    });
    // Test Sign up - last name not provided
    it('should return last name is required if no last name is provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signup')
        .send({
          firstName: 'Damilare',
          lastName: '',
          email: 'damilareolatubosun@yahoo.com',
          password: 'password',
        })
        .end((err, res) => {
          console.log(res.body);
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Last name is required');
          done();
        });
    });
    // Test Get Recipes
    it('Retrieving recipes should return 200', (done) => {
      chai.request(app)
        .get('/api/v1/recipes')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    // Test Create Recipe
    it('Should create a recipe', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .post('/api/v1/recipes')
            .set('auth', auth)
            .send({
              title: 'A new Recipe',
              details: 'Put on fire and cook',
              ingredients: 'salt,pepper,sugar',
              token: auth,
            })
            .end((err, res) => {
              expect(res.status).to.equal(201);
              done();
            });
        });
    });
    // Test Create Recipe - title is missing
    it('Should return title is required if title is not provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .post('/api/v1/recipes')
            .set('auth', auth)
            .send({
              title: '',
              details: 'Put on fire and cook',
              ingredients: 'salt,pepper,sugar',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.message).to.equal('Title is required');
              done();
            });
        });
    });
    // Test Create Recipe - details is not provided
    it('Should return details is required if details is not provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .post('/api/v1/recipes')
            .set('auth', auth)
            .send({
              title: 'A new Recipe',
              details: '',
              ingredients: 'salt,pepper,sugar',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.message).to.equal('Details is required');
              done();
            });
        });
    });
    // Test Create Recipe - ingredients is not provided
    it('Should return details is required if details is not provided', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .post('/api/v1/recipes')
            .set('auth', auth)
            .send({
              title: 'A new Recipe',
              details: 'Cook well',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.message).to.equal('Ingredients is required');
              done();
            });
        });
    });
    // Test Update Recipe - recipeID not provided
    it('Should return 404 if no ID in url string', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .put('/api/v1/recipes/')
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: '',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(404);
              done();
            });
        });
    });
    // Test Update Recipe - recipeID does not exist
    it('Should return Recipe Not Found if recipeid does not exist', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .put('/api/v1/recipes/999999')
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: '',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(404);
              expect(res.body.message).to.equal('Recipe Not Found');
              done();
            });
        });
    });
    // Test Update recipe - user trying update recipe he did not create
    it('Should return You are not authorised if user trying to update a recipe he did not create', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .put(`/api/v1/recipes/${testUser.recipe1.id}`)
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: '',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(403);
              expect(res.body.message).to.equal('You are not authorised to edit this recipe');
              done();
            });
        });
    });
    //  Test update recipe
    it('Should return 200 if recipe updated successfully', (done) => {
      chai.request(app)
        .put(`/api/v1/recipes/${testUser.recipe1.id}`)
        .set('auth', testUser.user1.auth2)
        .send({
          title: 'Amala and Ewedu',
          details: testUser.recipe1.details,
          ingredients: testUser.recipe1.ingredients,
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });
    // Test Delete Recipe - Non existing recipeID provided
    it('Should return 404 if non existing recipeID is provided to be deleted', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .delete('/api/v1/recipes/999999')
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: '',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(404);
              expect(res.body.message).to.equal('Recipe Not Found');
              done();
            });
        });
    });
    // Test Delete Recipe - User Trying to delete recipe he did not create
    it('Should return 403 if user Trying to delete recipe he did not create', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .delete(`/api/v1/recipes/${testUser.recipe1.id}`)
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: '',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(403);
              expect(res.body.message).to.equal('You are not authorised to delete this recipe');
              done();
            });
        });
    });
    // Test Delete Recipe - Successfully delete recipe
    it('Should return 200 if user successfully deletes recipe user created', (done) => {
      chai.request(app)
        .delete(`/api/v1/recipes/${testUser.recipe2.id}`)
        .set('auth', testUser.user1.auth2)
        .send({
          title: 'Recipe',
          details: '',
          ingredients: '',
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Recipe deleted successfully');
          done();
        });
    });
    // Retrieve Single  recipe
    it('Retrieving recipes should return 200', (done) => {
      chai.request(app)
        .get(`/api/v1/recipes/${testUser.recipe1.id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    // Retrieve Single  recipe  - Recipe doesn't exist
    it('Retrieving recipes should return 200', (done) => {
      chai.request(app)
        .get(`/api/v1/recipes/${testUser.recipe2.id}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Recipe Not Found');
          done();
        });
    });
    // Test Posting recipe reviews - submitting empty review
    it('Should return 400  - review cannot be empty', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .post(`/api/v1/recipes/${testUser.recipe1.id}/reviews`)
            .set('auth', auth)
            .send({
              review: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.message).to.equal('Review cannot be empty');
              done();
            });
        });
    });
    // Test Posting recipe reviews
    it('Should return 201', (done) => {
      chai.request(app)
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          chai.request(app)
            .post(`/api/v1/recipes/${testUser.recipe1.id}/reviews`)
            .set('auth', auth)
            .send({
              review: 'A new review',
            })
            .end((err, res) => {
              expect(res.status).to.equal(201);
              expect(res.body.message).to.equal('Review added successfully');
              done();
            });
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
    // tesst protected routes
    it('Protected routes should return please sign in if user not logged in', (done) => {
      chai.request(app)
        .post('/api/v1/recipes')
        .send({
          title: 'Rice and beans',
          details: 'boil for one hour.',
          ingredients: 'rice and water',
        })
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body.error).to.equal('Access Denied! Login required');
          done();
        });
    });
  });
});
