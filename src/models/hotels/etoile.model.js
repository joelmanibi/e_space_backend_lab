module.exports = (sequelize, Sequelize) => {
    const Etoile = sequelize.define("etoile", {
      etoile_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      etoile_name: {
        type: Sequelize.STRING
      }
    },
    {
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    }
      );
      return Etoile;
};