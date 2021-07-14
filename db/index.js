
require('dotenv').config()

// set up sequelize
const { Sequelize } = require('sequelize')
// export to either jaws or local
module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCAL_URL)