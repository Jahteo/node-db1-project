const express = require("express");

//Why was this here in the original file???
//const db = require("../data/dbConfig.js");

const AccountsRouter = require('../accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountsRouter)

server.get('/', (req, res) => {
  res.status(200).json({ api: "alive and well, amigos!"})
})

module.exports = server;
