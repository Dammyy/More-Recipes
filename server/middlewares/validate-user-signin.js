import isEmail from 'validator/lib/isEmail';
/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserSignIn = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).send({
      message: 'Email is required',
    });
  }
  if (!isEmail(req.body.email)) {
    return res.status(400).send({
      message: 'Email Invalid',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'Password is required',
    });
  }
  next();
};
export default validateUserSignIn;
