import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';

import users from '../models/user';

import models from '../models/index';

import config from '../../config';

const saltRounds = 10;
const usersModel = models.user;
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
    usersModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      hashPassword: bcrypt.hashSync(req.body.password, saltRounds),
    })
      .then(res.status(201).send('successful'))
      .catch(error => res.status(400).send(error));
  }
  /**
   * @returns {Object} signIn
   * @param {param} req
   * @param {param} res
   */
  static signIn(req, res) {
    if (!req.body.email) {
      res.status(400).send('Email is required');
    }
    if (!req.body.password) {
      res.status(400).send('Password is required');
    }
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
          jwt: jwt.sign(
            { firstName: user.firstName, lastName: user.lastName, email: user.email }, config.JWT_SECRET,
            { expiresIn: 60 * 60 }
          )
        });
      }
      else {
        res.status(401).send('Invalid Password');
      }
    })
      .catch(error => res.status(401).send(error));
  }
}
export default User;

