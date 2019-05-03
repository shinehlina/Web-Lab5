const express = require("express");
const Document = require("../../models/document");

const router = express.Router();

router.get("/", (req, res) => {
  Document.find({})
    .then(documents => {
      res.send(documents);
    })
    .catch(err => {
      res.status(200).json({ err: err });
    });
});

router.get("/create", (req, res) => res.render("create"));
router.post("/create", (req, res) => {
  Document.create({
    title: req.body.title,
    body: req.body.body
  }).then(post => console.log(post.id));

  res.status(201).send();
});

router.delete("/:id", (req, res) => {
  Document.findByIdAndRemove({ _id: req.params.id }, function(err) {});

  res.status(200).send();
});

router.get("/:id", (req, res) => {
  Document.findById({ id: req.params.id })
    .then(document => {
      res.send(document);
    })
    .catch(err => {
      res.status(200).json({ err: err });
    });
});

module.exports = router;
