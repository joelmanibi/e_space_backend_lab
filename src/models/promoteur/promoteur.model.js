module.exports = (sequelize, Sequelize) => {
    const Promoteur = sequelize.define("promoteur", {
      promoteur_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      promoteur_description: {
        type: Sequelize.TEXT
      },
      promoteur_location: {
        type: Sequelize.STRING
      },
      promoteur_commune: {
        type: Sequelize.INTEGER
      },
      promoteur_prestataire: {
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
      return Promoteur;
};