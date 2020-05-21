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

server.delete("/resources/:id", (req, res) => {
  Resources.remove(req.params.id)
  .then(resource => {
    if(resource){
        res.status(201).json("Resource Deleted")
    } else {
        res.status(401).json({message: "Id not found"})
    }
  }) .catch(error => {
    // save the error to a log somewhere
    console.log(error);
    res.status(500).json({ message: error.messsage });
  });
  
})

server.post("/resources", (req,res) => {
  Resources.insert(req.body)
  .then(resource => {
      res.status(201).json(resource)
  })
  .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error adding the hub',
      });
  })
});

server.get("/resources/:id", (req,res) => {
  Resources.get(req.params.id)
  .then(resource => {
      res.status(200).json(resource);
  })
  .catch(error => {
      console.log(error);
      res.status(500).json({
          message:"Error retrieving the project"
      });
  });
})

module.exports = server;
