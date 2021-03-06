'use strict';

const crypto = require('crypto');
const express = require('express');
const { Router } = express;

const api = (module.exports = Router());

api.use(
  '/hmac',
  Router()
    .get('/ctor', (req, res) => {
      try {
        const { input } = req.query;
        new crypto.Hmac('sha256', input);
        res.send(input);
      } catch (e) {
        res.send();
      }
    })

    .get('/create', (req, res) => {
      try {
        const { input } = req.query;
        crypto.createHmac('sha256', input);
        res.send(input);
      } catch (e) {
        res.send();
      }
    })

    .get('/update', (req, res) => {
      try {
        const { input } = req.query;
        const hmac = crypto.createHmac('sha256', 'cats_cats_cats');
        hmac.update(input);
        res.send(input);
      } catch (e) {
        res.send();
      }
    })

    .get('/', (req, res) => {
      res.render(`${__dirname}/../views/crypto.ejs`);
    })
);
