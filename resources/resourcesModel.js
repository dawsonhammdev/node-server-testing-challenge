const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll
};

function insert(resources) {
  return db("resources")
    .insert(resources, "id")
    
}

function remove(id) {
  return db("resources")
    .where("id", id)
    .del();
}

function getAll() {
  return db('resources');
}

function get(id) {
  return 
}

