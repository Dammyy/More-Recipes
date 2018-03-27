import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models/index';
import config from '../../config';

const saltRounds = 10;
const usersModel = models.users;
const FavoritesModel = models.favorites;
const RecipeModel = models.recipes;
let password = '';

/**
 * @class User
 */
class User {
/**
 * @param    {Object} req - request object
 * @param    {Object} res - response object
 *
 * @returns  {Object} user details
 */
  static signUp(req, res) {
    usersModel.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if (user) {
        return res.status(409).send({
          message: 'Email Already Exists',
        });
      }

      usersModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hashPassword: bcrypt.hashSync(req.body.password, saltRounds),
      })
        .then(createdUser => res.status(201).send({
          message: 'Registration Successful',
          jwt: jwt.sign({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            id: createdUser.id,
          }, config.JWT_SECRET),
        }))
        .catch(error => res.status(500).send(error));
    });
  }
  /**
 * @param    {Object} req - request object
 * @param    {Object} res - response object
 *
 * @returns  {Object} user details and jwt token
 */
  static signIn(req, res) {
    usersModel.findOne({
      where: {
        email: req.body.email
      }
    }).then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User Not Found',
        });
      }
      password = bcrypt.compareSync(req.body.password, user.hashPassword);
      if (password) {
        res.json({
          message: 'Login Successful',
          jwt: jwt.sign({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          }, config.JWT_SECRET),
          email: user.email,
          id: user.id,
        });
      } else {
        res.status(401).send({
          message: 'Invalid Password',
        });
      }
    })
      .catch(error => res.status(500).send(error));
  }
  /**
   *
   * @param    {Object} req - request object
   * @param    {Object} res - response object
   *
   * @returns  {Object} users favorite recipes
  */
  static getFavorites(req, res) {
    FavoritesModel.findAll({
      where: {
        userId: req.params.userId
      },
      include: [{ model: RecipeModel }]
    }).then((favorites) => {
      return res.status(200).send({
        statusCode: '200',
        favorites
      });
    });
  }

  /**
 *
 * @param    {Object} req - request object
 * @param    {Object} res - response object
 *
 * @returns  {Object} users details
 *
*/
  static userDetails(req, res) {
    usersModel.findOne({
      where: {
        id: req.decoded.id,
      },
      attributes: { exclude: ['hashPassword'] },
    }).then((user) => {
      RecipeModel.count({
        where: {
          userId: req.decoded.id
        }
      })
        .then((recipeCount) => {
          FavoritesModel.count({
            where: {
              userId: req.decoded.id
            }
          })
            .then((favsCount) => {
              return res.status(200).send({
                statusCode: '200',
                recipeCount,
                favsCount,
                user
              });
            });
        });
    });
  }
}
export default User;
