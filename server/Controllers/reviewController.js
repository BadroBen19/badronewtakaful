const reviewModel = require("../models");

exports.getReview = (req, res) => {
  reviewModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
