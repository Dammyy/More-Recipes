import chaiHttp from 'chai-http';
import chai from 'chai';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import supertest from 'supertest';
import app from '../app';
import models from '../models';
import config from '../../config';

const request = supertest.agent(app);
const UserModel = models.users;
const RecipeModel = models.recipes;
const ReviewModel = models.reviews;
const VotesModel = models.votes;

const { expect } = chai;
const should = chai.should();
let auth = '';
chai.use(chaiHttp);
const testUser = {};
const fakeAuth = 'xes4u6545if567675';
describe('Recipe controller', () => {
  describe('Recipe', () => {
    // Empty database tables
    before(async () => {
      await models.sequelize.sync();
      await UserModel.destroy({ where: {} });
      await RecipeModel.destroy({ where: {} });
      await ReviewModel.destroy({ where: {} });
      await VotesModel.destroy({ where: {} });
      await UserModel.create({
        firstName: 'Damilare',
        lastName: 'Olatubosun',
        email: 'damilareolatubosun@yahoo.com',
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
      testUser.recipe3 = await RecipeModel.create({
        title: 'Rice and beans',
        details: 'boil for one hour.',
        ingredients: 'rice and water',
        userId: testUser.user1.id
      });
    });
    // Test for undefined route
    it('Undefined routes should Return 404', (done) => {
      request
        .post('/another/undefined/route')
        .send({ random: 'random' })
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
    // Test protected routes
    it(
      'Protected routes should return Access Denied if user not logged in',
      (done) => {
        request
          .post('/api/v1/recipes')
          .send({
            title: 'Rice and beans',
            details: 'boil for one hour.',
            ingredients: 'rice and water',
          })
          .end((err, res) => {
            expect(res).to.have.status(401);
            expect(res.body.message).to.equal('Access Denied! Login required');
            done();
          });
      }
    );
    // Test expired or invalid token
    it('Should return  if token is invalid', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .post('/api/v1/recipes')
            .set('auth', fakeAuth)
            .end((err, res) => {
              expect(res.status).to.equal(401);
              expect(res.body.message).to.equal('Token has expired. Please sign in');
              done();
            });
        });
    });
    // Test Get Recipes
    it('Retrieving recipes should return 200', (done) => {
      request
        .get('/api/v1/recipes?page=1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          should.not.exist(err);
          done();
        });
    });
    // Test Create Recipe
    it('Should create a recipe', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .post('/api/v1/recipes')
            .set('auth', auth)
            .send({
              title: 'A new Recipe',
              details: 'Put on fire and cook',
              ingredients: 'salt,pepper,sugar'
            })
            .end((err, res) => {
              expect(res.status).to.equal(201);
              should.not.exist(err);
              done();
            });
        });
    });
    // Test Create Recipe - title is missing
    it('Should return title is required if title is not provided', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .put('/api/v1/recipes/999999')
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: 'This and that',
              ingredients: 'All the stuff',
            })
            .end((err, res) => {
              expect(res.status).to.equal(404);
              expect(res.body.message).to.equal('Recipe Not Found');
              done();
            });
        });
    });
    // Test Update Recipe - recipeID passed isnt a number
    it('Should return invalid request if recipeid passed is not a number', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .put('/api/v1/recipes/r')
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: '',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.message).to.equal('Invalid Request');
              done();
            });
        });
    });
    // Test Update recipe - user trying update recipe he did not create
    it('Should return You are not authorised if user trying to update a recipe he did not create', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .put(`/api/v1/recipes/${testUser.recipe1.id}`)
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: 'This and that',
              ingredients: 'All the stuff',
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
      request
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
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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
    // Test Delete Recipe - invalid recipeID provided
    it('Should return invalid request recipeID is provided to be deleted', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .delete('/api/v1/recipes/r')
            .set('auth', auth)
            .send({
              title: 'Recipe',
              details: '',
              ingredients: '',
            })
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.message).to.equal('Invalid Request');
              done();
            });
        });
    });
    // Test Delete Recipe - User Trying to delete recipe he did not create
    it('Should return 403 if user Trying to delete recipe he did not create', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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
      request
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
    it('Retrieving recipe should return 200', (done) => {
      request
        .get(`/api/v1/recipes/${testUser.recipe1.id}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
    // Test Retrieve single recipe - invalid recipeID provided
    it('Should return invalid request if invalid recipeID is provided', (done) => {
      request
        .get('/api/v1/recipes/t')
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.message).to.equal('Invalid Request');
          done();
        });
    });
    // Retrieve Single  recipe  - Recipe doesn't exist
    it('Retrieving recipe that does not exist should return 404', (done) => {
      request
        .get(`/api/v1/recipes/${testUser.recipe2.id}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.message).to.equal('Recipe Not Found');
          done();
        });
    });
    // Test Posting recipe reviews - submitting empty review
    it('Should return 400  - review cannot be empty', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
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

    // Test upvote a recipe
    it('Should upvote a recipe', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .post(`/api/v1/recipes/${testUser.recipe1.id}/vote/true`)
            .set('auth', auth)
            .end((err, res) => {
              expect(res.status).to.equal(201);
              expect(res.body.message).to.equal('Recipe upvoted');
              done();
            });
        });
    });

    // Test downvote a recipe that was previously upvoted
    it('Should downvote a recipe that was previously upvoted', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .post(`/api/v1/recipes/${testUser.recipe1.id}/vote/false`)
            .set('auth', auth)
            .end((err, res) => {
              expect(res.status).to.equal(201);
              expect(res.body.message).to.equal('Recipe downvoted');
              done();
            });
        });
    });

    // Test downvote recipe
    it('Should downvote a recipe', (done) => {
      request
        .post('/api/v1/users/signin')
        .send({
          email: 'damilareolatubosun@yahoo.com',
          password: 'password'
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          auth = res.body.jwt;
          request
            .post(`/api/v1/recipes/${testUser.recipe3.id}/vote/false`)
            .set('auth', auth)
            .end((err, res) => {
              expect(res.status).to.equal(201);
              done();
            });
        });
    });
  });
});
