const Sequelize = require('sequelize');
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const db = new Sequelize(
  process.env.DATABSE_URL || 'postgres://localhost:5432/Milestone', {logging: false}
)
module.exports = db
