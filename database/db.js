const { Sequelize } = require('sequelize');



// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('recu2', 'root', '', {
  host: 'localhost',
  dialect:'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});



module.exports = sequelize;