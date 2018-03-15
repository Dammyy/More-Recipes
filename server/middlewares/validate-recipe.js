/**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Function} next - next function
 * @returns {Object} validate Input
 * 
  */
const validateInput = (req, res, next) => {
  if (!req.body.title) {
    return res.status(400).send({
      message: 'Title is required',
    });
  }
  if (!req.body.details) {
    return res.status(400).send({
      message: 'Details is required',
    });
  }
  if (!req.body.ingredients) {
    return res.status(400).send({
      message: 'Ingredients is required',
    });
  }
  next();
};
export default validateInput;
