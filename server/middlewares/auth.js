import jwt from 'jsonwebtoken';

import jwtSecret from '../../config';

const secret = jwtSecret.JWT_SECRET;

 /**
   * @returns {Object} recipes
   * @param {*} req
   * @param {*} res
   */
const verifyToken = (req, res, next) => {
  const token = req.headers.auth || req.headers['x-access-token'] || req.body.token;
  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(400).send({ error: 'Invalid token' });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(403).send({ error: 'Access Denied! Login required' });
  }
};

export default verifyToken;
