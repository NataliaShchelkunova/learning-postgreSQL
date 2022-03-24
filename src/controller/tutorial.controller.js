const db = require("../models");

const Tutorial = db.tutorial;

exports.create = (req, res) => {
  const { title, description, published } = req.body;
  const tutorial = {
    title,
    description,
    published,
  };
  Tutorial.create(tutorial).then((result) => {
    res.send(result);
  });
};

exports.findAll = (req, res) => {
  Tutorial.findAll().then((result) => {
    res.send(result);
  });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Tutorial.findByPk(id).then((result) => {
    res.send(result);
  });
};
