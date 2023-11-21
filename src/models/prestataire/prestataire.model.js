module.exports = (sequelize, Sequelize) => {
    const Prestataire = sequelize.define("prestataire", {
      prestataire_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      prestataire_user: {
        type: Sequelize.INTEGER
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
      return Prestataire;
};