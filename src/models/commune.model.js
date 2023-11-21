module.exports = (sequelize, Sequelize) => {
    const Commune = sequelize.define("commune", {
      commune_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      commune_name: {
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
      return Commune;
};