const signModel = require("../models");

exports.getCardInfo = (req, res) => {
  signModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};
