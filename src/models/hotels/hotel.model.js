module.exports = (sequelize, Sequelize) => {
    const Hotel = sequelize.define("hotel", {
      hotel_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      hotel_name: {
        type: Sequelize.STRING
      },
      hotel_etoile: {
        type: Sequelize.INTEGER
      },
      hotel_service: {
        type: Sequelize.INTEGER
      },
      hotel_filiere: {
        type: Sequelize.STRING
      },
      hotel_description: {
        type: Sequelize.TEXT
      },
      hotel_video: {
        type: Sequelize.STRING
      },
      hotel_location: {
        type: Sequelize.STRING
      },
      hotel_prestataire: {
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
      return Hotel;
};