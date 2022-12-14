const Sequelize = require('sequelize');
const config = require('../config/config.json');
const db = {};

const {
  username, password, database, host, dialect,
} = config.development;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const Member = require('./member')(sequelize, Sequelize.DataTypes);
db.Member = Member;


const Progress = require('./progress')(sequelize, Sequelize.DataTypes);
db.Progress = Progress;

const Quantities = require('./quantities')(sequelize, Sequelize.DataTypes);
db.Quantities = Quantities;

const Safety = require('./safety')(sequelize, Sequelize.DataTypes);
db.Safety = Safety;

const Works = require('./works')(sequelize, Sequelize.DataTypes);
db.Works = Works;

module.exports = db;


(async () => {
  // await sequelize.sync({ force: true });
  await Member.sync();
  await Progress.sync();
  await Quantities.sync();
  await Safety.sync();
  await Works.sync();
})();