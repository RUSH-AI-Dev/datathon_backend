const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const Budget = sequelize.define(
    "Budget",
    {      
      A: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      B: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      C: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      D: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
    },
    {
      // options
    }
  );


(async () => {
  await Budget.sync({ force: false });    
})();

  
module.exports = Budget;
