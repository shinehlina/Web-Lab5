const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// const Document = require("document");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const documents = require('./routes/api/documents');
app.use('/api/documents', documents)

module.exports = app;
