module.exports = (sequelize, Sequelize) => {
    const Lieu = sequelize.define("lieu", {
      lieu_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      lieu_contact: {
        type: Sequelize.STRING
      },
      lieu_open: {
        type: Sequelize.DATE
      },
      lieu_close: {
        type: Sequelize.DATE
      },
      lieu_description: {
        type: Sequelize.TEXT
      },
      lieu_location: {
        type: Sequelize.STRING
      },
      lieu_image: {
        type: Sequelize.STRING
      },
      lieu_commune: {
        type: Sequelize.INTEGER
      },
      lieu_prestataire: {
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
      return Lieu;
};