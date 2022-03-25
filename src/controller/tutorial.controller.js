const db = require("../models");

const Tutorial = db.tutorial;

exports.create = (req, res) => {
  const { title, description, published } = req.body;
  if (title && description && published) {
    console.log(title);
    const tutorial = {
      title,
      description,
      published,
    };
    Tutorial.create(tutorial).then((result) => {
      res.send(result);
    });
  } else {
    res.send({
      message: `Create new task was failing, becouse body is empty. Please check the data you send.`,
    });
  }
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

exports.updateOne = (req, res) => {
  const { body, id = body.id } = req;
  if (id) {
    Tutorial.update(body, { where: { id: body.id } }).then((result) => {
      if (result == 1) {
        Tutorial.findAll()
          .then((resultAll) => {
            res.send(resultAll);
          })
          .catch((err) => {
            res.send({
              message: `tutorial id=${id} update was failing.`,
            });
          });
      } else {
        res.send({
          message: `id=${id} not found in database. Check if id is correct`,
        });
      }
    });
  } else {
    res.send({
      message: `id=${id} is empty.`,
    });
  }
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;
  if (id) {
    Tutorial.destroy({ where: { id: id } }).then((resultDelete) => {
      if (resultDelete == 1) {
        Tutorial.findAll()
          .then((result) => {
            res.send(result);
          })
          .catch((error) => {
            res.send({
              message: `tutorial id=${id} delete was failing.`,
            });
          });
      } else {
        res.send({
          message: `id=${id} not found in database. Check if id is correct`,
        });
      }
    });
  } else {
    res.send({
      message: `id=${id} is empty.`,
    });
  }
};
