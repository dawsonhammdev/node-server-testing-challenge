const express = require("express");

const Resources = require("../resources/resourcesModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/resources", (req, res) => {
  Resources.getAll()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;
