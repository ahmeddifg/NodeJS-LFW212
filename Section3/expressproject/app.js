const express = require("express");
const errors = require("http-errors");
const router = require("./routes/index");
const createError = require('http-errors')
const app = express();

const port = process.env.port|3000;

app.use("/",router);

app.use((req, res, next) => {
    if (req.method !== 'GET') {
      next(createError(405))
      return
    }
    next(createError(404))
  });

app.listen(port);