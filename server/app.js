const express = require('express');
const bodyParser = require('body-parser');

const Document = require('document');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  Document.find({})
    .then(documents => {
      res.render('index', { documents: documents });
    })
    .catch(err => {
      res.status(200).json({ err: err });
    });
});

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
  const { title, body } = req.body;

  Document.create({
    title: title,
    body: body
  }).then(post => console.log(post.id));

  res.redirect('/');
});

module.exports = app;