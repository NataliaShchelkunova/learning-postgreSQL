module.exports = (app) => {
  const tutorialControllers = require("../controller/tutorial.controller");
  const express = require("express");
  const router = express.Router();

  router.post("/", tutorialControllers.create);
  router.get("/getAllTutorial", tutorialControllers.findAll);
  router.get("/:id", tutorialControllers.findOne);
  router.patch("/editOneTutorial", tutorialControllers.updateOne);
  router.delete("/deleteOneTutorial/:id", tutorialControllers.deleteOne);

  app.use("/api/tutorial", router);
};
