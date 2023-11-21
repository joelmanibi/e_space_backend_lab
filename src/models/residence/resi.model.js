module.exports = (sequelize, Sequelize) => {
    const Resi = sequelize.define("resi", {
      resi_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      resiType: {
        type: Sequelize.INTEGER
      },
      resi_location: {
        type: Sequelize.STRING
      },
      resi_description: {
        type: Sequelize.TEXT
      },
      resi_service: {
        type: Sequelize.INTEGER
      },
      resi_prestataire: {
        type: Sequelize.INTEGER
      },

    },
    {
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    }
      );
      return Resi;
};