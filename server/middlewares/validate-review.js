/**
 *
 * @param    {Object} req - request object
 * @param    {Object} res - response object
 * @param    {Function} next - next function
 *
 * @returns  {Object} validate Input
 *
   */
const validateInput = (req, res, next) => {
  if (!req.body.review) {
    return res.status(400).send({
      message: 'Review cannot be empty',
    });
  }
  next();
};
export default validateInput;
