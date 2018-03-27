import validator from 'validator';

/**
 *
 * @param    {Object} req - request object
 * @param    {Object} res - response object
 * @param    {Function} next - next function
 *
 * @returns  {Object} validate Input
 *
   */
const validateUserInput = (req, res, next) => {
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'First name is required',
    });
  }
  if (!validator.isAlpha(req.body.firstName)) {
    return res.status(400).send({
      message: 'Only alphabets allowed in first name',
    });
  }
  if (!req.body.lastName) {
    return res.status(400).send({
      message: 'Last name is required',
    });
  }
  if (!validator.isAlpha(req.body.lastName)) {
    return res.status(400).send({
      message: 'Only alphabets allowed in last name',
    });
  }

  if (!req.body.email) {
    return res.status(400).send({
      message: 'Email is required',
    });
  }
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).send({
      message: 'Email Invalid',
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
      message: 'Password is required',
    });
  }
  if (!validator.equals(req.body.password, req.body.password2)) {
    return res.status(400).send({
      message: 'Passwords do not match',
    });
  }
  next();
};
export default validateUserInput;
