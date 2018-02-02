import isEmail from 'validator/lib/isEmail';
/**
   * @returns {Object} validate Input
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
const validateUserInput = (req, res, next) => {
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
  if (!req.body.firstName) {
    return res.status(400).send({
      message: 'First name is required',
    });
  }
  if (!req.body.firstName.match('[a-zA-Z]+$')) {
    return res.status(400).send({
      message: 'Only alphabets allowed in first name',
    });
  }
  if (!req.body.lastName) {
    return res.status(400).send({
      message: 'Last name is required',
    });
  }
  if (!req.body.lastName.match('[a-zA-Z]+$')) {
    return res.status(400).send({
      message: 'Only alphabets allowed in last name',
    });
  }
  next();
};
export default validateUserInput;
