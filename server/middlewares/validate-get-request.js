/**
 *
 * @param {Object} req - request object
 * @param {Object} res - response object
 *  @param {Function} next - next function
 *  @returns {Object} validate Input
  */
const validateInput = (req, res, next) => {
  if (!req.params.recipeId) {
    return res.status(404);
  }
  if ((!req.params.recipeId.match('\\d+'))) {
    return res.status(400).send({
      message: 'Invalid Request',
    });
  }
  next();
};
export default validateInput;
