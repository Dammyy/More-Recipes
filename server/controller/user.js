import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import models from '../models/index';
import config from '../../config';

const saltRounds = 10;
const usersModel = models.users;
const FavoritesModel = models.favorites;
let password = '';
/**
 * @class User
 */
class User {
/**
 * @returns {Object} signUp
 * @param {param} req
 * @param {param} res
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
        .then(res.status(201).send({
          message: 'Registration Successful',
          jwt: jwt.sign(
            {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
            }, config.JWT_SECRET,
            { expiresIn: 60 * 60 }
          ),
        }))
        .catch(error => res.status(400).send(error));
    });
  }
  /**
   * @returns {Object} signIn
   * @param {param} req
   * @param {param} res
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
          jwt: jwt.sign(
            {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email
            }, config.JWT_SECRET,
            { expiresIn: 60 * 60 }
          ),
          email: user.email,
          id: user.id,
        });
      } else {
        res.status(401).send({
          message: 'Invalid Password',
        });
      }
    })
      .catch(error => res.status(401).send(error));
  }
  /**
   * @returns {Object} getFavorites
   * @param {req} req
   * @param {res} res
   */
  static getFavorites(req, res) {
    FavoritesModel.findAll({
      where: {
        userId: req.params.userId
      }
    }).then((favorites) => {
      if (favorites.length < 1) {
        return res.status(404).send({
          message: 'No Favorite recipes found',
        });
      }
      if (req.decoded.id !== parseFloat(req.params.userId)) {
        return res.status(403).send({
          message: 'You are not authorised to view other users favorites',
        });
      }
      return res.status(200).send(favorites);
    })
      .catch(error => res.status(400).send(error));
  }
}
export default User;

