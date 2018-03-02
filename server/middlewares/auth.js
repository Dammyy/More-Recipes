import jwt from 'jsonwebtoken';

import jwtSecret from '../../config';

const secret = jwtSecret.JWT_SECRET;
/**
   * @returns {Object} verifies token
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const verifyToken = (req, res, next) => {
  const token =
  req.headers.auth || req.headers['x-access-token'] || req.body.token;
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401)
          .send({ message: 'Token has expired. Please sign in' });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(401).send({ message: 'Access Denied! Login required' });
  }
};

export default verifyToken;
