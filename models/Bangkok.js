const Sequelize = require("sequelize");
const sequelize = require("./../db_instance");

const Bangkok = sequelize.define(
    "Bangkok",
    {      
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      detial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "-"
      },
      lat: {
        type: Sequelize.STRING,
        allowNull: false
      },
      long: {
        type: Sequelize.STRING,
        allowNull: false
      },
    },
    {
      // options
    }
  );


(async () => {
  await Bangkok.sync({ force: false });    
})();

  
module.exports = Bangkok;
