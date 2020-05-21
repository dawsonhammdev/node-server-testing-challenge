const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll
};

async function insert(resources) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('resources');
}

