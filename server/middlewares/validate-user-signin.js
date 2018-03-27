import isEmail from 'validator/lib/isEmail';
/**
 * @param    {Object} req - request object
 * @param    {Object} res - response object
 * @param    {Function} next - next function
 *
 * @returns  {Object} validate Input
 *
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
