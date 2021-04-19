module.exports = (req, res, next) => {
  const err = new Error('Not Found: bad endpoint');
  err.status = 404;
  next(err);
};
